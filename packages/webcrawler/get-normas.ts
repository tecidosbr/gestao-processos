import phantom from "phantom";
import fs from "fs";

import taxonomyPages from "./taxonomy-pages.json";
import posts from "./posts.json";
import { Post } from "@cmnext/types";

(async function () {
  let crawler: phantom.PhantomJS;

  try {
    crawler = await phantom.create();

    const page = await crawler.createPage();

    const postsLoadedPreviously = new Set(posts.map(p => p.slug))

    for (const { taxonomy, postPageUrls } of taxonomyPages) {
      for (const url of postPageUrls) {
        console.log(url);

        const slug: string = /\/([a-z0-9\-_]+)\/$/.exec(url)[1];

        if (postsLoadedPreviously.has(slug)) {
          continue;
        }

        postsLoadedPreviously.add(slug);

        await page.open(url);

        await new Promise(r => setTimeout(r, 2_500));

        const title: string = (await page.property("title"))
          .replace(/^Conta com a gente - /, "")
          .replace(/ - Conta com a gente$/, "")
          .replace(/ -$/, "")
          .replace(/ %$/, "")
          .trim();

        const thumb: string = await page.evaluate(() =>
          /url\((.+)\)/.exec(jQuery("header").css("background"))[1].replace('"', '')
        );

        const content: string = await page.evaluate(() => {
          const $post = jQuery("div.post");
          $post.find(".addthis_tool").remove();
          $post.find(".fb-comments").remove();
          $post.find("*").removeAttr("style").removeAttr("class");
          return $post.html().trim();
        });

        const contentRaw: string = await page.evaluate(() => {
          const $post = jQuery("div.post");
          $post.find(".addthis_tool").remove();
          $post.find(".fb-comments").remove();
          return $post.text().trim();
        });

        const excerpt: string = await page.evaluate(() =>
          jQuery("div.post p").first().text().trim()
        );

        const post: Post = {
          title,
          slug,
          excerpt,
          content,
          contentRaw,
          contentMimeType: 'text/html',
          type: "blog",
          meta: {
            thumb
          },
          taxonomies: [
            taxonomy,
            { name: "Tecnologia", slug: "tecnologia", type: "blog-tag" },
            { name: "Banco", slug: "banco", type: "blog-tag" },
            { name: "Investimentos", slug: "investimentos", type: "blog-tag" },
          ]
        }

        posts.push(post);
      }

      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
    }
  } catch (e) {
    console.error(e)
  } finally {
    await crawler?.exit();
    process.exit();
  }
})();

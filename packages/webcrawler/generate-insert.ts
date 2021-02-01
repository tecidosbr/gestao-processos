import filenamify from 'filenamify/filenamify';
import normas from './out/normas.json';

for (const n of normas) {
    console.log(`INSERT INTO norma VALUES ('${n.id}', '${n.titulo}', '${n.objetivo}', '${n.ics}', '${n.palavrasChave}');`);
}
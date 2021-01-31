import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bootstrap } from './bootstrap';

async function createApp() {
  const app = await NestFactory.create(AppModule);
  await bootstrap(app);
  await app.listen(5000);
}
createApp();

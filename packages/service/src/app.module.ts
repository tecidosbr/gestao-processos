import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { providers } from './service';
@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers,
  providers,
})
export class AppModule {}

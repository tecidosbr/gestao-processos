import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { controllers } from './controllers';
import { providers } from './service';
@Module({
  imports: [InMemoryDBModule.forRoot({}), TerminusModule],
  controllers,
  providers,
})
export class AppModule {}

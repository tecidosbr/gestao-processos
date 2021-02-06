import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { controllers } from './controllers';
@Module({
  imports: [TerminusModule],
  controllers,
})
export class AppModule {}

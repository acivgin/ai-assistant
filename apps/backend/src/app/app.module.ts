import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiModule } from './open-ai/openai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OpenAiModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

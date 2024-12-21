import { Module } from '@nestjs/common';
import { OpenAiService } from './openai.service';
import { OpenAIController } from './openai.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    OpenAiModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config globally available
    }),
  ],
  controllers: [OpenAIController],
  providers: [OpenAiService],
})
export class OpenAiModule {}

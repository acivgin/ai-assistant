import { Controller, Get, Query } from '@nestjs/common';
import { OpenAiService } from './openai.service';

@Controller('openai')
export class OpenAIController {
  constructor(private openAIService: OpenAiService) {}

  @Get('generate')
  async generate(@Query('prompt') prompt: string): Promise<string> {
    return this.openAIService.generateResponse(prompt);
  }
}

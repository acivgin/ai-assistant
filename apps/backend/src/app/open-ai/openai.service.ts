import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAiService {
  private _openApiClient: OpenAI;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    //process.env.OPENAI_API_KEY;
    console.log('process.env.OPENAI_API_KEY', apiKey);

    this._openApiClient = new OpenAI({
      apiKey: apiKey,
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    console.log(this._openApiClient.beta);
    const completion = await this._openApiClient.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that answers programming questions in the professional style',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });
    return completion.choices[0].message.content;
  }
}

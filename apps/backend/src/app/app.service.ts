import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AppService {
  // private _openApiClient: OpenAI;
  // constructor(private readonly configService: ConfigService) {
  //   const apiKey = this.configService.get<string>('OPENAI_API_KEY');
  //   this._openApiClient = new OpenAI({
  //     apiKey: apiKey,
  //   });
  // }
  // async getResponse(prompt: string): Promise<string> {
  //   // const response = await this.openai.chat.completions.create({
  //   //   model: 'gpt-4',
  //   //   messages: [{ role: 'user', content: prompt }],
  //   // });
  //   // return response.choices[0].message.content;
  //   const completion = await this._openApiClient.chat.completions.create({
  //     model: 'gpt-3.5-turbo',
  //     messages: [
  //       {
  //         role: 'system',
  //         content:
  //           'You are a helpful assistant that answers programming questions in the professional style',
  //       },
  //       {
  //         role: 'user',
  //         content: prompt,
  //       },
  //     ],
  //   });
  //   return completion.choices[0].message.content;
  //}
}

import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { OpenAiService } from './openai.service';
import { OpenAI } from 'openai';

jest.mock('openai');

describe('OpenAiService', () => {
  let service: OpenAiService;
  let openAIClientMock: jest.Mocked<OpenAI>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OpenAiService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('test-api-key'),
          },
        },
      ],
    }).compile();

    service = module.get<OpenAiService>(OpenAiService);
    openAIClientMock = new OpenAI({
      apiKey: 'test-api-key',
    }) as jest.Mocked<OpenAI>;
    service['_openApiClient'] = openAIClientMock;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a response', async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: 'Test response',
          },
        },
      ],
    };

    (openAIClientMock.chat.completions.create as jest.Mock).mockResolvedValue(
      mockResponse
    );

    const prompt = 'Test prompt';
    const response = await service.generateResponse(prompt);

    expect(response).toBe('Test response');
    expect(openAIClientMock.chat.completions.create).toHaveBeenCalledWith({
      model: 'gpt-3.5-turbo',
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
  });
});

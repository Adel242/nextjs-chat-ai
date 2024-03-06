import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
    const { messages } = await req.json()

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.9,
        stream: true,
        messages: messages
    });

    // const data = await response.json();
    // console.log('esta es data',data)
    const stream = OpenAIStream(response);
    // return NextResponse.json(data);
    return new StreamingTextResponse(stream);
};
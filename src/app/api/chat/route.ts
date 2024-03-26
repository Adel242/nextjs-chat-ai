// import { codegpt } from '@/code_gpt';
import { StreamingTextResponse } from 'ai';
import { format } from 'path';

export const runtime = 'edge';

export async function POST(req: Request) {

  const { messages, agentId } = await req.json()

  console.log('messages', messages)
  // console.log('agent', agentId)

  const response = await fetch('https://api-beta.codegpt.co/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      "accept": "application/json",
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.JUDINI_API_KEY}`,
      // "CodeGPT-Org-Id":
    },
    body: JSON.stringify({
      messages,
      agentId,
      format: 'text',
      stream: true,
    })
  })

  if (response.body === null) {
    throw new Error('Network response was not ok, eso.');
  }

  const reader = response.body.getReader();

  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        controller.enqueue(value);

      }

      controller.close();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "text/plain" } })

};
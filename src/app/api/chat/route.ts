// import { StreamingTextResponse } from 'ai';
import { headers } from 'next/headers';
// import { format } from 'path';


export const runtime = 'edge';

export async function POST(req: Request) {

  const { messages, agentId } = await req.json()
  const headersList = headers()
  const apiKey = headersList.get('Authorization') || '';
  const orgId = headersList.get('CodeGPT-Org-Id') || '';

  const response = await fetch('https://api-beta.codegpt.co/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      "accept": "application/json",
      'Content-Type': 'application/json',
      'Authorization': `${apiKey}`,
      // "CodeGPT-Org-Id": `${orgId}`
    },
    body: JSON.stringify({
      messages,
      agentId,
      format: 'text',
      stream: true,
      orgId,
    })
  });

  if (response.body === null) {
    throw new Error('Network response was not ok, eso.');
  };

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
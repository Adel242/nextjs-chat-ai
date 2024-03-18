import { codegpt } from '@/code_gpt';
import { StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {

  const { messages, agentId } = await req.json()

  console.log('messages', messages)
  console.log('agent', agentId)
 
  const stream = await codegpt.experimental_AIStream({ messages, agentId });

  return new StreamingTextResponse(stream);
};
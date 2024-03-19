import { codegpt } from '@/code_gpt';
import { StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {

  const { messages, agentId } = await req.json()

  // console.log('messages', messages)
  // console.log('agent', agentId)

  const stream = await codegpt.experimental_AIStream({ messages, agentId });

  // let chatResponse = ''
  // const reader = stream.getReader()
  // const decoder = new TextDecoder()
  // while (true) {
  //   const { done, value } = await reader.read()
  //   if (done) break
  //   const content = decoder.decode(value)
  //   chatResponse += content
  //   console.log(content)
  // }

  // console.log(chatResponse)

  return new StreamingTextResponse(stream);
};
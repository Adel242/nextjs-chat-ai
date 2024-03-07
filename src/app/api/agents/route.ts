import { codegpt } from "@/code_gpt";
import { NextResponse } from "next/server";

export async function GET() {
const agents = await getAgents()
  // return new Response(JSON.stringify(agents))
  return NextResponse.json(agents)
};


async function getAgents() {
  const agents = await codegpt.getAgents();
  return agents
}

type Agent = Awaited<ReturnType<typeof getAgents>>[number]
import { codegpt } from "@/code_gpt";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const agents = await getAgents()
    return NextResponse.json(agents)
  } catch (error) {
    console.log(error)
    return NextResponse.json({error: error})
  }
  // return new Response(JSON.stringify(agents))
};

async function getAgents() {
  try {
    const agents = await codegpt.getAgents();
    return NextResponse.json(agents)
  }catch (error) {
    console.log(error)
    // throw error
    return NextResponse.json({error: error})
  }
};

type Agent = Awaited<ReturnType<typeof getAgents>>[];
import { useState, useEffect } from "react";
import { Agent } from "../../types";

const useFetchAgents = ({ apiKey, orgId }: { apiKey: string, orgId: string }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [agentsMarketPlace, setAgentsMarketPlace] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent>();

  useEffect(() => {
    console.log('apiKey', apiKey)
    if (!apiKey) { return }
    console.log('apiKey 2', apiKey)
    const headers: HeadersInit = {
      "accept": "application/json",
      "Authorization": `Bearer ${apiKey}`
    };
    if (orgId) headers["CodeGPT-Org-Id"] = orgId

    // get agents private 
    fetch(`https://api-beta.codegpt.co/api/v1/agents`, {
      headers
    }).then(res => res.json()).
      then(agents => {
        setAgents(agents);
        setSelectedAgent(agents[0]);
      });

    // get agents marketplace
    fetch(`https://api-beta.codegpt.co/api/v1/agent/marketplace`, {
      headers
    }).then(res => res.json()).
      then(agents => {
        const mappedAgents = agents.map((agent: any) => {
          return {
            ...agent,
            isMarketPlace: true
          }
        })
        setAgentsMarketPlace(agents);
      })
  }, [apiKey, orgId]);

  return { agents, agentsMarketPlace, selectedAgent, setSelectedAgent };
};

export default useFetchAgents;
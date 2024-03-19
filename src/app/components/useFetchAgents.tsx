import { useState, useEffect } from 'react';
import { Agent } from '../../types';

const useFetchAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent>();

  useEffect(() => {
    fetch('/api/agents')
      .then(res => res.json())
      .then(agents => {
        setAgents(agents);
        setSelectedAgent(agents[0]);
      })
  }, []);

  return { agents, selectedAgent, setSelectedAgent };
}

export default useFetchAgents;
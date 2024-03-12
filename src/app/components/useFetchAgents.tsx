import { useState, useEffect } from 'react';
import { Agent } from '../../types';

const useFetchAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent>();
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    fetch('/api/agents')
      .then(res => res.json())
      .then(agents => {
        setAgents(agents);
        setSelectedAgent(agents[0]);
      })
  }, []);

  const clearMessages = () => {
    setMessages([]);
  };


  return { agents, selectedAgent, setSelectedAgent };
}

export default useFetchAgents;
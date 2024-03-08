import { useMemo } from 'react';
import { Agent } from '../../types'

const useFilteredAgents = (initialAgents: Agent[], search: string) => {
  const agents = useMemo(() => {
    const agents = initialAgents.filter(agent => agent.name.toLowerCase().includes(search.toLowerCase()))
    return agents.length ? agents : [];
  }, [initialAgents, search])

  return agents;
}

export default useFilteredAgents;


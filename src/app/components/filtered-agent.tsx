import { useMemo } from 'react';
import { Agent } from '../../types'

const FilteredAgents = (initialAgents: Agent[], search: string) => {
  const agents = useMemo(() => {
    if (!Array.isArray(initialAgents)) {
      return [];
    }
    const filteredAgents = initialAgents.filter(agent => agent.name.toLowerCase().includes(search.toLowerCase()))
    return filteredAgents.length ? filteredAgents : [];
  }, [initialAgents, search]);
  
  return agents;
};

export default FilteredAgents;
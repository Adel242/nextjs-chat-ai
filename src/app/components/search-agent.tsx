import { useState } from "react";
import  FilteredAgents  from "./filtered-agent";
import { UseAgentSearchProps } from "../../types";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useCredentialsStore } from "../stores/store"; 

export default function SearchAgent({ initialAgents, selectedAgent, setSelectedAgent  }: UseAgentSearchProps) {
  const [search, setSearch] = useState('');

  // component useFilteredAgents
  const agents = FilteredAgents(initialAgents, search);

  // function useCredentials ./Store
  const apiKey = useCredentialsStore((state) => state.apiKey);

  return (
    <>
      <Select
        items={agents}
        placeholder="Select an agent"
        disableAnimation
        onSelectionChange={
          (agent) => {
            const agentId = new Set(agent).values().next().value;
            const getAgent = initialAgents.find(agent => agent.id === agentId);
            if (!getAgent) {
              return;
            }
            setSelectedAgent(getAgent!);
          }
        }
        className="max-w-xs"
        label="Agent"
        labelPlacement="outside"
        isLoading={!!apiKey && agents.length === 0}
        isDisabled={!apiKey}
        classNames={{
          label: 'text-xs uppercase text-default-300'
        }}
        renderValue={(agents) => {
          return agents.map((item) => (
            <div key={item.data?.id} className="flex items-center gap-2">
              <Avatar
                alt={item.data?.name}
                className="w-6 h-6 flex-shrink-0"
                size="sm"
                src={item.data?.image}
              />
              <div className="flex flex-col">
                <span>{item.data?.name}</span>
              </div>
            </div>
          ));
        }}
      // defaultSelectedKeys={[initialAgents.length > 0 ? initialAgents[0].id : 0]}
      >
        {(agent: any) => (
          <SelectItem key={agent.id} textValue={agent.name}>
            <div className="flex gap-2 items-center">
              <Avatar alt={agent.name} className="flex-shrink-0" size="sm" src={agent.image} />
              <div className="flex flex-col">
                <span className="text-small">{agent.name}</span>
                <span className="text-tiny text-default-400 text-ellipsis flex gap-1 items-center"><SparklesIcon className="hidden w-3 h-3" />{agent.model}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
    </>
  );
}


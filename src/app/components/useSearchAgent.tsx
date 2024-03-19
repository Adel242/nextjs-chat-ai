import { useState } from "react";
import useFilteredAgents from './useFilterAgent';
import { UseAgentSearchProps } from '../../types';
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { SparklesIcon } from "@heroicons/react/24/outline";

function UseAgentSearch({ initialAgents, selectedAgent, setSelectedAgent }: UseAgentSearchProps) {
  const [search, setSearch] = useState('');
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // component useFilteredAgents
  const agents = useFilteredAgents(initialAgents, search);
  // const agents = useFilteredAgents(initialAgents, search);
  // console.log('agents', initialAgents ? initialAgents[0].id : null)

  return (
    <>
      <Select
        items={agents}
        placeholder="Select an agent"

        onSelectionChange={
          (agent) => {
            const agentId = new Set(agent).values().next().value;
            const getAgent = initialAgents.find(agent => agent.id === agentId);
            if (!getAgent){
              return;
            }
            setSelectedAgent(getAgent!);
          }
        }

        className="max-w-xs"
        label="Agent"
        labelPlacement="outside"
        isLoading={agents.length === 0}
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
      {/* <div className="w-1/3">

        <button onClick={() => setIsDropdownOpen(prev => !prev)} id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" type="button" className="justify-between w-full text-white mb-4 bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:bg-purple-800 ">Agentes
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        <div id="dropdownSearch" className="z-10 bg-white rounded-lg shadow w-100 dark:bg-gray-700 " style={{ display: isDropdownOpen ? 'block' : 'none' }}>
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="input-group-search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user" />
            </div>
          </div>

          <ul className="h-48 px-3 pb-3 overflow-y-auto scrollbar text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            {agents.map(agent => {
              const { id, name } = agent
              return (
                <li key={id}>
                  <div className={` ${selectedAgent?.id === id ? 'bg-gray-600' : ''} flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600`} onClick={() => setSelectedAgent(agent)}>
                    <label htmlFor="checkbox-item-11" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{name}</label>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default UseAgentSearch;
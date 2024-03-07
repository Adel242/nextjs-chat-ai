"use client"
import { useChat } from "ai/react";
import { useEffect, useMemo, useState } from "react";
import { Agent } from "./types";

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState<Agent>();
  const { messages, input, handleInputChange, handleSubmit, error } = useChat({
    api: 'api/chat',
    body: {
      agentId: selectedAgent?.id
    }
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [initialAgents, setInitialAgents] = useState<Agent[]>([]);

  useEffect(() => {
    fetch('/api/agents').then(res => res.json()).then(agents => {
      setInitialAgents(agents)
      setSelectedAgent(agents[0])
    })
  }, []);

  const [search, setSearch] = useState('');

  const agents = useMemo(() => {
    const agents = initialAgents.filter(agent => agent.name.toLowerCase().includes(search.toLowerCase()))
    if (!agents) {
      return []
    } return agents
  }, [initialAgents, search])

  return (
    <main className="flex min-h-screen flex-col  justify-between p-6">

      <div>
        <button onClick={() => setIsDropdownOpen(prev => !prev)} id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown search
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        <div id="dropdownSearch" className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700" style={{ display: isDropdownOpen ? 'block' : 'none' }}>
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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

      </div>

      <div>
        {
          messages
            .filter((message) => message.role === "user" || message.role === "assistant")
            .map((message, index) => (
              <div key={index}>
                <div className="chat chat-start" >
                  {/* <div className="chat-image avatar"></div> */}
                  <div className="">{message.content}</div>
                </div>
              </div>
            ))
        }
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex w-full flex-row p-6">
          <textarea value={input} onChange={handleInputChange} className="w-full text-black p-2" placeholder="Enter your message here"></textarea>
          <button className="hover:bg bg-[rgb(var(--background-button-send))]" type="submit"> send</button>
        </form>
      </div>
    </main>
  )
};
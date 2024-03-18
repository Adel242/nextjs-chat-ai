"use client"
import { useChat } from "ai/react";
// import { useState } from "react";
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'
// import ShikiHighlighter from './components/useMarckdownShiki';
// import useFilteredAgents from './components/useFilterAgent';
import useFetchAgents from './components/useFetchAgents';
import useCleanChat from "./components/useClearChat";
import UseAgentSearch from "./components/useSearchAgent";

export default function Home() {

  const { agents: initialAgents, selectedAgent, setSelectedAgent } = useFetchAgents();
  const { messages, setMessages, input, handleInputChange, handleSubmit, error } = useChat({
    api: 'api/chat',
    body: {
      agentId: selectedAgent?.id
    }
  });

  // component useCleanChat
  const { handleCleanChat } = useCleanChat(setMessages);

  return (
    <main className="flex min-h-screen flex-row  justify-between p-6 m-2">

      <UseAgentSearch
        initialAgents={initialAgents}
        selectedAgent={selectedAgent}
        setSelectedAgent={setSelectedAgent}
      />

      <div className=" flex w-full flex-col justify-between ">

        <div>
          {
            messages
              .filter((message) => message.role === "user" || message.role === "assistant")
              .map((message, index) => (
                <div key={index}>
                  <div className="chat chat-start p-6">
                    {message.content}
                  </div>
                </div>
              ))
          }
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex  flex-row p-6">
            <button onClick={handleCleanChat} type="button" className="hover:bg bg-[rgb(var(--background-button-send))] p-2 mr-2 rounded-md">Clean Chat</button>
            <textarea value={input} onChange={handleInputChange} className="w-full text-black p-2 rounded-md" placeholder="Enter your message here"></textarea>
            <button className="hover:bg bg-[rgb(var(--background-button-send))] p-2 ml-2 rounded-md" type="submit"> send</button>
          </form>
        </div>
      </div>
    </main>
  );
}
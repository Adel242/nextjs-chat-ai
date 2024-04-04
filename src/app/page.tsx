"use client"

import React, { useState } from "react"
import { useChat } from "ai/react"
import { Message } from "../types"
import { Avatar, Button, ScrollShadow, Textarea, Tooltip } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { ArchiveBoxXMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import { useCredentialsStore } from "./stores/store"
import ModalWelcome from "./modal-welcome/page"
import useFetchAgents from './components/useFetchAgents'
import CleanChat from "./components/clean-chat"
import SearchAgent from "./components/search-agent"
import useMarkdownRenderer from "./components/Markdown/use-markdown-renderer"
import DropdownNavbar from "./components/dropdown-navbar";
import Navbar from './components/navbar'


export default function Home() {
  const [agentImage, setAgentImage] = useState("");
  const { apiKey, orgId } = useCredentialsStore();
  const [handleModal, setHandleModal] = useState(false);
  const { renderMessageContent } = useMarkdownRenderer();
  const { agents: initialAgents, selectedAgent, setSelectedAgent } = useFetchAgents({ apiKey, orgId });

  const headers: HeadersInit = {
    "accept": "application/json",
    "Authorization": `Bearer ${apiKey}`
  };
  if (orgId) headers["CodeGPT-Org-Id"] = orgId

  const { messages, setMessages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
    api: 'api/chat',
    headers,
    body: {
      agentId: selectedAgent?.id,
    }
  });

  const router = useRouter();

  // component clean-chat
  const { handleCleanChat } = CleanChat(setMessages);

  const handleCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    const apiKey = localStorage.getItem('apiKey');
    // const orgId = localStorage.getItem('orgId');
    e.preventDefault()
    // if (!selectedAgent) {
    //   alert("show selecte agent");
    //   return;
    // }
    if (!apiKey) {
      setHandleModal(false)
      router.push('/credentials');
      return
    }
    setHandleModal(true);
    handleSubmit(e);
  };

  return (
    <>
      <div className="h-screen max-h-screen w-full grid grid-flow-row grid-rows-[1fr_auto]">
        <nav className="flex justify-between p-4">
          <div className="flex-grow">
            {<SearchAgent
              initialAgents={initialAgents}
              selectedAgent={selectedAgent}
              setSelectedAgent={setSelectedAgent}
            />
            }
          </div>
          <div className="flex-grow mx-4">
            <Navbar />
          </div>
          <div className="flex-grow text-right">
            <DropdownNavbar />
          </div>
        </nav>

        {!apiKey && <ModalWelcome />}

        <ScrollShadow>
          <div className="container grid gap-4 max-w-2xl p-1 text-lg mx-auto pb-6">
            {
              messages
                .filter((message: Message) => message.role === "user" || message.role === "assistant")
                .map((message: Message, index: number) => (
                  <div className='message px-2 py-4 rounded-2xl' key={index}>
                    <div className="grid gap-2">
                      <div className="flex gap-2 items-center">
                        <Avatar
                          className={`w-6 h-6 rounded-full ${message.role === "user" ? "bg-orange-200" : "bg-primary-500"} `}
                          src={message.role === "user" ? '' : selectedAgent?.image} alt={message.role === "user" ? "You" : selectedAgent?.name} size="sm"
                        />
                        <p>{message.role === "user" ? "You" : selectedAgent?.name}</p>
                      </div>
                      <div className="">
                        {renderMessageContent(message.content)}
                        {isLoading && index === messages.length - 1 && <div><Button className="mt-2" isLoading variant="flat" size="sm">Thinking</Button></div>}
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>

        </ScrollShadow>
        {/* Chat Input */}
        <footer className="container max-w-lg mx-auto p-3" >
          <form onSubmit={e => handleCredentials(e)} className="grid relative w-full">

            <Button
              onPress={handleCleanChat}
              className="right-0 -top-10 fixed"
              size="sm"
              variant="flat"
            >Clean Chat</Button>

            <div className="buttons flex gap-2 items-center absolute right-0 -top-10">
              <Tooltip content="Delete all messages" showArrow disableAnimation>
                <Button
                  onPress={handleCleanChat}
                  size="sm"
                  variant="flat"
                  isIconOnly
                  isDisabled={isLoading}
                  startContent={<ArchiveBoxXMarkIcon className="w-4 h-4" />}
                />
              </Tooltip>

              <Tooltip content="Resend last message" showArrow disableAnimation>
                <Button
                  onPress={() => reload}
                  size="sm"
                  variant="flat"
                  isIconOnly
                  isDisabled={isLoading}
                  startContent={
                    <ArrowPathIcon className="w-4 h-4" />
                  }
                />
              </Tooltip>
            </div>

            <Textarea
              errorMessage
              size="lg"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter your message here"
              onKeyUp={
                (e) => {
                  if (input.trim().length < 3 || isLoading) { return }
                  if (e.key === 'Enter' && !e.shiftKey) { handleCredentials(e as React.FormEvent<HTMLFormElement>) }
                  if (e.key === 'Enter') { handleCredentials }
                }
              }
              endContent={
                <Button
                  type="submit"
                  isDisabled={input.trim().length < 3 || isLoading}
                  color="primary"
                >Send</Button>
              }
            />

          </form>
        </footer>
      </div>
    </>
  )
};
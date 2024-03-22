"use client"

import { useChat } from "ai/react"
import useFetchAgents from './components/useFetchAgents'
import useCleanChat from "./components/useClearChat"
import UseAgentSearch from "./components/useSearchAgent"
import useMarkdownRenderer from "./components/Markdown/use-markdown-renderer"
// import { MarkdownRender } from "./components/markdown-render"
import { Avatar, Button, ScrollShadow, Textarea, Tooltip } from "@nextui-org/react"
import { ArchiveBoxXMarkIcon, ArrowPathIcon, PlayIcon } from "@heroicons/react/24/outline"
// import { useState } from "react";
// import useFilteredAgents from './components/useFilterAgent'

export default function Home() {
  const { renderMessageContent } = useMarkdownRenderer();
  const { agents: initialAgents, selectedAgent, setSelectedAgent } = useFetchAgents()

  const { messages, setMessages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
    api: 'api/chat',
    body: {
      agentId: selectedAgent?.id
    }
  })

  // component useCleanChat
  const { handleCleanChat } = useCleanChat(setMessages);

  return (
    <div className="h-screen max-h-screen w-full grid grid-flow-row grid-rows-[1fr_auto]">
      <nav className='p-3'>
        <UseAgentSearch
          initialAgents={initialAgents}
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
        />
      </nav>
      <ScrollShadow>
        <div className="container grid gap-4 max-w-lg mx-auto pb-6">
          {
            messages
              .filter((message) => message.role === "user" || message.role === "assistant")
              .map((message, index) => (
                <div className='message px-2 py-4 rounded-2xl' key={index}>
                  <div className="grid gap-2">
                    <div className="flex gap-2 items-center">
                      <Avatar
                        className={`w-6 h-6 rounded-full ${ message.role === "user" ? "bg-orange-200" : "bg-primary-500" } `}
                        src={ message.role === "user" ? '' : selectedAgent?.image } alt={ message.role === "user" ? "You" : selectedAgent?.name } size="sm" />
                      <p>{message.role === "user" ? "You" : selectedAgent?.name}</p>
                    </div>
                    <div className="pl-8">
                      { renderMessageContent(message.content) }
                      {/* <MarkdownRender content={message.content} /> */}
                      { isLoading && index === messages.length - 1 && <div><Button className="mt-2" isLoading variant="flat" size="sm">Thinking</Button></div> }
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
      </ScrollShadow>
      {/* Chat Input */}
      <footer className="container max-w-lg mx-auto p-3" >
        <form
          onSubmit={handleSubmit}
          className="grid relative w-full"
        > 
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
                startContent={<ArchiveBoxXMarkIcon className="w-4 h-4" />}
              />
            </Tooltip>
            <Tooltip content="Resend last message" showArrow disableAnimation>
              
              <Button 
                onPress={() => reload}
                size="sm"
                variant="flat"
                isIconOnly
                startContent={
                  <ArrowPathIcon className="w-4 h-4" />
                }
              />
            </Tooltip>
          </div>
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Enter your message here"
            onKeyUp={
              (e) => { if (input.trim().length < 3 || isLoading) {return}
                if (e.key === 'Enter' && !e.shiftKey) { handleSubmit(e as React.FormEvent<HTMLFormElement>) }
                if (e.key === 'Enter') { handleSubmit }
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
  )
}
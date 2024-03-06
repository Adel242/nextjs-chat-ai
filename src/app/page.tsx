"use client"
// import Image from "next/image";
// import { FormEvent, useState } from "react";
import { useChat } from "ai/react";

export default function Home() {

  const { messages, input, handleInputChange, handleSubmit, error } = useChat({
    api: 'api/chat',
    initialMessages: [
      {
        id: new Date().toISOString(),
        role: "system",
        content: "experto en programacion"
      }
    ]
  });

  // const [input, setInput] = useState('');
  // const [messages, setMessages] = useState<any[]>([
  //   {
  //     role: "system",
  //     content: "experto en programacion"
  //   }
  // ]);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const newMessage = {
  //     role: "user",
  //     content: input
  //   };
  //   const newMessages = [...messages, newMessage];
  //   setInput('');
  //   setMessages(newMessages);
  //   sentMessagesToApi([newMessage])
  // };

  // const changeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setInput(e.target.value);
  // }

  // const sentMessagesToApi = async (messages: any[]) => {
  //   const response = await fetch('/api/chat', {
  //     method: 'POST',
  //     body: JSON.stringify({ messages })
  //   });
  //   const data = await response.json();

  //   setMessages(prevData => [...prevData, data.choices[0].message]);
  // };
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
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
          <textarea value={input} onChange={handleInputChange} className="w-full text-black p-2" placeholder="Enter tour message here"></textarea>
          <button className="hover:bg bg-[rgb(var(--background-button-send))]" type="submit"> send</button>
        </form>
      </div>
    </main>
  )
};

import { useState } from "react";
import { Message } from '../../types';

const useCleanChat = (setMessages: any) => {
  const [chatClean, setChatClean] = useState<Message>();
  const handleCleanChat = () => {
    setMessages([])
  };

  return { chatClean, handleCleanChat };
};

export default useCleanChat;



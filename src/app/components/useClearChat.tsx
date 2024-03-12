import { useState } from "react";

const useCleanChat = () => {
  const [chatClean, setChatClean] = useState('');

  const handleCleanChat = () => {
    setChatClean('');
  };

  return { chatClean, handleCleanChat };
};

export default useCleanChat;



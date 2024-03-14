 import { Message } from '../../types';

const useCleanChat = (setMessages: (messages: Message[]) => void) => {
  const handleCleanChat = () => {
    setMessages([]);
  };

  return { handleCleanChat };
};

export default useCleanChat;



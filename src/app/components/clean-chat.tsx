import { Message } from '../../types';

const CleanChat = (setMessages: (messages: Message[]) => void) => {
  const handleCleanChat = () => {
    setMessages([]);
  };

  return { handleCleanChat };
};

export default CleanChat;
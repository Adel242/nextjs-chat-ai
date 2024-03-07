export interface Agent {
    id: string;
    org_id: string;
    created_at: Date;
    pincode: null | string;
    is_public: boolean;
    welcome: string;
    image: null | string;
    agent_type: AgentType;
    name: string;
    prompt: string;
    model: Model;
    description: null;
    is_frozen: boolean;
  };
  
  export enum AgentType {
    QA = "qa",
  };
  
  export enum Model {
    Claude21 = "claude-2.1",
    GPT35Turbo = "gpt-3.5-turbo",
    GPT4 = "gpt-4",
    GPT4Turbo = "gpt-4-turbo",
    Gemini10Pro = "gemini-1.0-pro",
  };
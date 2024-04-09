import { create } from "zustand"

// interface CredentialsStore {
//   apiKey: string
//   orgId: string
//   setCredentials: (state: { apiKey?: string; orgId?: string }) => void
// }

// export const useCredentialsStore = create<CredentialsStore>()((set) => ({
//   apiKey: '',
//   orgId: '',
//   setCredentials: (state) => set(state)
// }))

// Local Storage Credentials (ApiKey and OrgId)
interface ApiKeyStore {
  apiKey: string;
  orgId: string;
  setCredentials: (props: { apiKey: string; orgId: string }) => void
};

export const useCredentialsStore = create<ApiKeyStore>()((set) => ({
  apiKey: "",
  orgId: "",
  setCredentials: ({ apiKey, orgId }) => {
    set({ apiKey, orgId });
    localStorage.setItem('apiKey', apiKey ?? '');
    localStorage.setItem('orgId', orgId ?? '');
  },
}));

// Local Storage Agent (AgentImg, AgentName and Message)
export interface AgentStore {
  agentImg: string;
  agentName: string;
  message: string ;
  setAgentData: (props: { agentImg: string; agentName: string; message: string }) => void;
}

export const useAgentsStore = create<AgentStore>((set) => ({
  agentImg: '',
  agentName: '',
  message: '',
  setAgentData: ({ agentImg, agentName, message }) => {
    set({ agentImg, agentName, message });
    localStorage.setItem('agentImg', agentImg ?? '');
    localStorage.setItem('agentName', agentName ?? '');
    localStorage.setItem('message', message ?? '');
  },
}));
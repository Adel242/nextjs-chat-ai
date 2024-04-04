import { create } from 'zustand'

interface CredentialsStore {
  apiKey: string
  orgId: string
  setCredentials: (state: { apiKey?: string; orgId?: string }) => void
}

export const useCredentialsStore = create<CredentialsStore>()((set) => ({
  apiKey: '',
  orgId: '',
  setCredentials: (state) => set(state)
}))

// interface ApiKeyStore {
//   apiKey: string | null;
//   orgId: string | null;
//   setCredentials: (apiKey: string | null, orgId: string | null) => void;
// }

// export const useCredentialsStore = create<ApiKeyStore>()((set) => ({
//   apiKey: localStorage.getItem('apiKey'),
//   orgId: localStorage.getItem('orgId'),
//   setCredentials: (apiKey, orgId) => {
//     set({ apiKey, orgId });
//     localStorage.setItem('apiKey', apiKey ?? '');
//     localStorage.setItem('orgId', orgId ?? '');
//   },
// }));
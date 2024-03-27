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
import { create } from 'zustand'

export type User = Record<string, string> | null

export interface Tokens {
  accessToken: string | null
  refreshToken: string | null
}

export interface AuthState extends Tokens {
  user: User | null
}

interface Store extends AuthState {
  setTokens: (tokens: Tokens) => void
  resetTokens: () => void
  setUser: (user: User) => void
}

export const useStore = create<Store>((set) => ({
  accessToken: null,
  refreshToken: null,
  user: null,
  setTokens: ({accessToken, refreshToken}: Tokens) => set({
    accessToken,
    refreshToken
  }),
  resetTokens: () => set({
    accessToken: null,
    refreshToken: null
  }),
  setUser: (user: User) => set({
    user,
  }),
}))

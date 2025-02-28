import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type User = Record<string, string> | null

export interface Tokens {
  accessToken: string | null
  refreshToken: string | null
}

export interface AuthState extends Tokens {
  user: User | null
  otpTime: string | null
  mobile: string | null
  mustUpdateUserData: boolean
}

interface Store extends AuthState {
  setTokens: (tokens: Tokens & Partial<Record<'mustUpdateUserData', boolean>>) => void
  resetTokens: () => void
  setUser: (user: User) => void
  setOtpTime: (otpTime: string) => void
  setMobile: (mobile: string) => void
  resetOtpFlow: () => void
  resetState: () => void
}

const defaultState: AuthState | null = {
  accessToken: null,
  refreshToken: null,
  user: null,
  otpTime: null,
  mobile: null,
  mustUpdateUserData: false,
}

export const useAuthStore = create<Store>()(persist(
  (set) => ({
    ...defaultState,
    setTokens: ({ accessToken, refreshToken, mustUpdateUserData }: Tokens & Partial<Record<'mustUpdateUserData', boolean>>) => set({
      accessToken,
      refreshToken,
      mustUpdateUserData: mustUpdateUserData ?? false,
    }),
    resetTokens: () => set({
      accessToken: null,
      refreshToken: null
    }),
    setUser: (user: User) => set({
      user
    }),
    setOtpTime: (otpTime: string) => set({ otpTime }),
    setMobile: (mobile: string) => set({ mobile }),
    resetOtpFlow: () => set({ otpTime: null, mobile: null }),
    resetState: () => set(defaultState),
  }),
  {
    name: 'auth-storage',
    storage: createJSONStorage(() => sessionStorage),
  }
))

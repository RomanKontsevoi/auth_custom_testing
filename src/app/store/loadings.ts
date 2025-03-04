import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

interface LoadingState {
  isLoginLoading: boolean
  isRequestOTPLoading: boolean
}

interface Store extends LoadingState {
  setIsLoginLoading: (isLoginLoading: boolean) => void
  setIsRequestOTPLoading: (isLoginLoading: boolean) => void
}

export const useLoadingStore = create<Store>()(
  devtools((set) => ({
    isLoginLoading: false,
    isRequestOTPLoading: false,
    setIsLoginLoading: (isLoginLoading: boolean) => set({ isLoginLoading }),
    setIsRequestOTPLoading: (isRequestOTPLoading: boolean) => set({ isRequestOTPLoading })
  }))
);

import { create } from 'zustand'

interface Local {
  hasReadWelcome: boolean
  setHasReadWelcomes: (read: boolean) => void
}

const init = localStorage.getItem('hasReadWelcomes')

export const useLocalStore = create<Local>(set => ({
  hasReadWelcome: init === 'yes',
  setHasReadWelcomes: (read: boolean) => {
    const result = read ? 'yes' : 'no'
    localStorage.setItem('hasReadWelcomes', result)
    set({ hasReadWelcome: result === 'yes' })
  },
}))

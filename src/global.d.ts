import type { Record } from 'pocketbase'

declare global {
  interface User extends Record {
    username: string
    email: string
    avatar: string
    name: string
    emailVisibility: boolean
    verified: boolean
  }

  type ToastVariant = 'success' | 'warning' | 'error' | 'info'

  interface Toast {
    id: string
    message: string
    variant: ToastVariant
  }
}

export {}

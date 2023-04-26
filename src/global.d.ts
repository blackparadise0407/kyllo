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

  interface Board extends Record {
    title: string
    description: string
    owner: string
    members: string[]
    private: boolean
    cover: string
    lists: string[]
    cards: string[]
    expand: {
      cards?: Card[]
      lists?: List[]
      owner?: User
      members?: User[]
    }
  }

  interface List extends Record {
    title: string
    rank: string
    board: string
    creator: string
  }

  interface Card extends Record {
    title: string
    attachments: string[]
    creator: string
    assignees: string[]
    rank: string
    board: string
    list: string
  }
}

export {}

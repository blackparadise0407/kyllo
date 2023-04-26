import { createQueryKeyStore } from '@lukemorales/query-key-factory'

import { boardPb, cardPb, listPb, userPb } from '../pb'

export const queryKeys = createQueryKeyStore({
  users: {
    detail: (id: string) => ({
      queryKey: [id],
      queryFn: () => userPb.getById(id),
    }),
  },
  boards: {
    all: null,
    detail: (id: string) => ({
      queryKey: [id],
      queryFn: () => boardPb.getById(id),
    }),
  },
  lists: {
    all: (boardId: string) => ({
      queryKey: [boardId],
      queryFn: () => listPb.getByBoardId(boardId),
    }),
  },
  cards: {
    all: (boardId: string) => ({
      queryKey: [boardId],
      queryFn: () => cardPb.getByBoardId(boardId),
    }),
  },
})

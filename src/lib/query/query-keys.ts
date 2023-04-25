import { createQueryKeyStore } from '@lukemorales/query-key-factory'

import { userPb } from '../pb'

export const queryKeys = createQueryKeyStore({
  users: {
    detail: (id: string) => ({
      queryKey: [id],
      queryFn: () => userPb.getById(id),
    }),
  },
  boards: {
    all: null,
  },
})

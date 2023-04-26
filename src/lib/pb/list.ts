import { pb } from '.'

const c = pb.collection('lists')

export const listPb = {
  getByBoardId: (boardId: string) => {
    return c.getFullList<List>(undefined, {
      filter: `board = '${boardId}'`,
    })
  },
}

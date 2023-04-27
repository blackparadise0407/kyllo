import { pb } from '.'

const c = pb.collection('cards')

export const cardPb = {
  getByBoardId: (boardId: string) => {
    return c.getFullList<Card>(undefined, {
      filter: `board = '${boardId}'`,
    })
  },
}

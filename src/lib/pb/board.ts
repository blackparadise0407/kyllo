import { pb } from '.'

const c = pb.collection('boards')

export const boardPb = {
  getById(id: string) {
    return c.getOne<Board>(id)
  },
  getList() {
    return c.getList<Board>(undefined, undefined)
  },
}

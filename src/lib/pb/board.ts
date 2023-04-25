import { pb } from '.'

const c = pb.collection('boards')

export const boardPb = {
  getById(id: string) {
    return c.getOne(id)
  },
  getList() {
    return c.getList(undefined, undefined)
  },
}

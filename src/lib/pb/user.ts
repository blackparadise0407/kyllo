import { pb } from '.'

const c = pb.collection('users')

export const userPb = {
  getById(id: string) {
    return c.getOne<User>(id)
  },
}

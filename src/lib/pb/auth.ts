import { pb } from '.'

interface LoginDto {
  username: string
  password: string
}

interface RegisterDto {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

const c = pb.collection('users')

export const authPb = {
  async login(loginDto: LoginDto) {
    const resp = await c.authWithPassword<User>(
      loginDto.username,
      loginDto.password,
    )
    if (!resp.record.verified) {
      pb.authStore.clear()
      throw new Error('Account not verified')
    }
    return resp
  },
  async register(registerDto: RegisterDto) {
    const registeredUser = await c.create<User>(registerDto)
    await c.requestVerification(registerDto.email)
    return registeredUser
  },
  logout() {
    pb.authStore.clear()
    window.location.reload()
  },
}

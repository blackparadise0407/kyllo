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
  login(loginDto: LoginDto) {
    return c.authWithPassword(loginDto.username, loginDto.password, undefined, {
      verified: true,
    })
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

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button, TextField } from '@/components'
import { useToast } from '@/hooks'
import { authPb } from '@/lib/pb/auth'
import { routeKey } from '@/routes'

interface RegisterForm {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

export default function Register() {
  const [loading, setLoading] = useState(false)
  const { enqueue } = useToast()
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<RegisterForm>()

  const handleRegister = async (data: RegisterForm) => {
    try {
      setLoading(true)
      await authPb.register(data)
      enqueue('An verification email has been sent')
    } catch (e: any) {
      enqueue(e?.message, { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card card-bordered shadow-xl rounded-box max-w-lg w-full bg-base-100">
      <div className="card-body">
        <div className="card-title font-semibold">Register to Kyllo</div>
        <form
          className="mt-5 space-y-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <TextField
            className="input-bordered"
            label="Username"
            placeholder="Enter username"
            type="text"
            error={errors.username}
            {...register('username', { required: 'Username is required' })}
          />
          <TextField
            className="input-bordered"
            label="Email"
            placeholder="Enter email"
            type="email"
            error={errors.email}
            {...register('email', { required: 'Email is required' })}
          />
          <TextField
            className="input-bordered"
            label="Password"
            placeholder="Enter password"
            type="password"
            error={errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          <TextField
            className="input-bordered"
            label="Password confirm"
            placeholder="Enter password confirm"
            type="password"
            error={errors.passwordConfirm}
            {...register('passwordConfirm', {
              required: 'Password confirm is required',
            })}
          />

          <Button
            className="btn-primary w-full"
            type="submit"
            loading={loading}
          >
            Submit
          </Button>
        </form>
        <div className="divider"></div>
        <span className="text-center">
          Already have an account?{' '}
          <Link className="link link-primary" to={routeKey.login}>
            Log in here
          </Link>
        </span>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button, TextField } from '@/components'
import { useToast } from '@/hooks'
import { authPb } from '@/lib/pb/auth'
import { routeKey } from '@/routes'

interface LoginForm {
  username: string
  password: string
}

export default function Login() {
  const { enqueue } = useToast()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginForm>()

  const handleLogin = async (data: LoginForm) => {
    try {
      setLoading(true)
      await authPb.login(data)
      navigate(routeKey.home)
    } catch (e: any) {
      enqueue(e?.message, { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card card-bordered shadow-xl rounded-box max-w-lg w-full bg-base-100">
      <div className="card-body">
        <div className="card-title font-semibold">Login to Kyllo</div>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <TextField
            className="input-bordered"
            label="Username / email"
            placeholder="Enter username or email"
            type="text"
            error={errors.username}
            {...register('username', { required: 'Username is required' })}
          />
          <TextField
            className="input-bordered"
            label="Password"
            placeholder="Enter your password"
            type="password"
            error={errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          <div className="flex justify-end">
            <Link
              className="link link-primary -mt-4"
              to={routeKey.forgotpassword}
            >
              Forgot password?
            </Link>
          </div>
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
          Doesn't have an account?{' '}
          <Link className="link link-primary" to={routeKey.register}>
            Sign up here
          </Link>
        </span>
      </div>
    </div>
  )
}

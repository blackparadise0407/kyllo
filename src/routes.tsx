/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

import { AuthLayout } from './layouts/auth-layout'
import { AppLayout } from './layouts/app-layout'

const Login = lazy(() => import('@/pages/login/Login'))
const Register = lazy(() => import('@/pages/register/Register'))
const BoardList = lazy(() => import('@/pages/board-list/BoardList'))
const BoardDetail = lazy(() => import('@/pages/board-detail/BoardDetail'))

export const routeKey = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotpassword: '/forgot-password',
  notfound: '*',
  boardId: (id: string) => `/${id}`,
} as const

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <BoardList />,
      },
      {
        path: ':id',
        element: <BoardDetail />,
      },
    ],
  },
  {
    path: routeKey.home,
    element: <AuthLayout />,
    children: [
      {
        path: routeKey.login,
        element: <Login />,
      },
      {
        path: routeKey.register,
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <>Not found</>,
  },
]

import { Navigate, Outlet } from 'react-router-dom'

import { pb } from '@/lib/pb'
import { routeKey } from '@/routes'

export default function AuthLayout() {
  if (pb.authStore.isValid) {
    return <Navigate to={routeKey.home} />
  }

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <Outlet />
    </main>
  )
}

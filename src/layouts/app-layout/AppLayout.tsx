import { Navigate, Outlet } from 'react-router-dom'

import { pb } from '@/lib/pb'
import { routeKey } from '@/routes'

import Header from './Header'

export default function AppLayout() {
  if (!pb.authStore.isValid) {
    return <Navigate to={routeKey.login} />
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] bg-base-200">
        <Outlet />
      </main>
    </>
  )
}

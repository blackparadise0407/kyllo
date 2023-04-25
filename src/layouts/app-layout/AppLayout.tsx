import { Navigate, Outlet } from 'react-router-dom'

import { pb } from '@/lib/pb'
import { routeKey } from '@/routes'

export default function AppLayout() {
  if (!pb.authStore.isValid) {
    return <Navigate to={routeKey.login} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

import { Link } from 'react-router-dom'

import { Avatar } from '@/components'
import { routeKey } from '@/routes'
import { authPb, pb } from '@/lib/pb'

export default function Header() {
  const user = pb.authStore.model as User | null

  return (
    <nav className="navbar h-[4rem] bg-base-100">
      <div className="flex-1">
        <Link to={routeKey.home} className="btn btn-ghost normal-case text-xl">
          Kyllo
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          {user && (
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <Avatar className="w-10 rounded-full" user={user} />
            </label>
          )}
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={authPb.logout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

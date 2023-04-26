import clsx from 'clsx'

import avatarPlaceholder from '@/assets/avatar-placeholder.png'
import { getPbImgUrl } from '@/helpers'

interface AvatarProps {
  user?: User | null
  className?: string
}

export default function Avatar({ className, user }: AvatarProps) {
  const avatarUrl = user ? getPbImgUrl(user, user.avatar) : ''

  return (
    <div className="avatar" data-testid="avatar">
      <div className={clsx('w-10', className)}>
        <img src={avatarUrl || avatarPlaceholder} />
      </div>
    </div>
  )
}

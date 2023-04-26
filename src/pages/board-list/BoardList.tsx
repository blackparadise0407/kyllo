import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import { boardPb } from '@/lib/pb/board'
import { queryKeys } from '@/lib/query'
import { routeKey } from '@/routes'

import BoardCard from './BoardCard'

export default function BoardList() {
  const { data } = useQuery({
    ...queryKeys.boards.all,
    queryFn: boardPb.getList,
  })

  const sortedBoards = data?.items.sort(
    (a, b) => +new Date(b.created) - +new Date(a.created),
  )

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {sortedBoards?.map((it) => (
          <Link key={it.id} to={routeKey.boardId(it.id)}>
            <BoardCard data={it} />
          </Link>
        ))}
      </div>
    </div>
  )
}

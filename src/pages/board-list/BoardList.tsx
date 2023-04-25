import { useQuery } from '@tanstack/react-query'

import { boardPb } from '@/lib/pb/board'
import { queryKeys } from '@/lib/query'

export default function BoardList() {
  const { data } = useQuery({
    ...queryKeys.boards.all,
    queryFn: boardPb.getList,
  })

  return <div></div>
}

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

import { queryKeys } from '@/lib/query'
import { groupBy } from '@/helpers'

import List from './List'

export default function BoardDetail() {
  const { id } = useParams<{ id: string }>()
  const listsQuery = useQuery({ ...queryKeys.lists.all(id!), enabled: !!id })
  const cardsQuery = useQuery({ ...queryKeys.cards.all(id!), enabled: !!id })

  const sortedList = listsQuery.data?.sort((a, b) =>
    a.rank.localeCompare(b.rank),
  )

  const groupedCards = useMemo(
    () => groupBy(cardsQuery.data ?? [], (card) => card.list),
    [cardsQuery.data],
  )

  return (
    <div>
      {sortedList?.map((it) => (
        <List key={it.id} data={it} cards={groupedCards.get(it.id)} />
      ))}
    </div>
  )
}

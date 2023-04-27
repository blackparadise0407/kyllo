import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'

import { queryKeys } from '@/lib/query'
import { groupBy } from '@/helpers'
import { pb } from '@/lib/pb'

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

  async function handleDragEnd(event: DragEndEvent) {
    if (event.over) {
      await pb.collection('cards').update(event.active.id as string, {
        list: event.over!.id,
      })
      cardsQuery.refetch()
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-5">
        {sortedList?.map((it) => (
          <List key={it.id} data={it} cards={groupedCards.get(it.id)} />
        ))}
      </div>
    </DndContext>
  )
}

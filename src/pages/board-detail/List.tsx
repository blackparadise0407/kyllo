import { useDroppable } from '@dnd-kit/core'

import Card from './Card'

interface ListProps {
  data: List
  cards?: Card[]
}

export default function List({ data, cards = [] }: ListProps) {
  const { setNodeRef } = useDroppable({
    id: data.id,
  })

  return (
    <div className="w-72 p-2 rounded-box bg-base-100">
      <div>{data.title}</div>
      <div ref={setNodeRef} className="min-h-8">
        {cards.map((it) => (
          <Card key={it.id} data={it} />
        ))}
      </div>
    </div>
  )
}

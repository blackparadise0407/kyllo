import { useDraggable } from '@dnd-kit/core'
import clsx from 'clsx'
import type { CSSProperties } from 'react'

interface CardProps {
  data: Card
}

export default function Card({ data }: CardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: data.id,
  })

  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(3deg)`,
      }
    : undefined

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        'card card-compact rounded-box bg-base-100',
        transform && 'shadow',
      )}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="card-body">
        {/* <img className="rounded-box" src={imagePlaceholder} /> */}
        {data.title}
      </div>
    </div>
  )
}

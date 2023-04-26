interface ListProps {
  data: List
  cards?: Card[]
}

export default function List({ data, cards = [] }: ListProps) {
  return (
    <div className="w-72 p-2 rounded-box bg-base-100">
      <div>{data.title}</div>
      {cards.map((it) => (
        <div key={it.id}>{it.title}</div>
      ))}
    </div>
  )
}

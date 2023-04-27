import { getPbImgUrl } from '@/helpers'
import imagePlaceholder from '@/assets/image-placeholder.jpg'

interface BoardCardProps {
  data: Board
}

export default function BoardCard({ data }: BoardCardProps) {
  return (
    <div className="card card-bordered card-compact h-full overflow-hidden hover:shadow-lg transition-shadow bg-base-100">
      <img
        className="w-full h-[65%] object-cover"
        src={getPbImgUrl(data, data.cover) || imagePlaceholder}
        alt=""
      />
      <div className="card-body">
        <div className="card-title">
          <p className="text-base">{data.title}</p>
        </div>
      </div>
    </div>
  )
}

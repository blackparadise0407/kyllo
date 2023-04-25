import clsx from 'clsx'
import { useEffect } from 'react'
import { HiOutlineX } from 'react-icons/hi'

interface ToastCardProps {
  data: Toast
  onClose?: (id: string) => void
}

const getClsFromVariant = (v: ToastVariant) => {
  switch (v) {
    case 'error':
      return 'alert-error'
    case 'info':
      return 'alert-info'
    case 'success':
      return 'alert-success'
    case 'warning':
      return 'alert-warning'
  }
}

export default function ToastCard({ data, onClose }: ToastCardProps) {
  const handleClose = () => {
    onClose?.(data.id)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose()
    }, 7000)
    return () => {
      clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={clsx(
        'relative alert w-[24rem] pr-10',
        getClsFromVariant(data.variant),
      )}
    >
      <div>
        <span>{data.message}</span>
      </div>
      <HiOutlineX
        className="absolute right-3 top-3 text-lg cursor-pointer"
        onClick={handleClose}
      />
    </div>
  )
}

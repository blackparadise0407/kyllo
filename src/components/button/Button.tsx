import clsx from 'clsx'
import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export default function Button({
  loading,
  className,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = loading || disabled
  return (
    <button
      className={clsx(
        'btn flex items-center gap-2',
        loading && 'loading',
        isDisabled && 'btn-disabled',
        className,
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  )
}

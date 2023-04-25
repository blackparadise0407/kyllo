import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface TextField extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  label?: string
}

const TextField = forwardRef<HTMLInputElement, TextField>(function TextField(
  { className, label = '', error, ...rest },
  ref,
) {
  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text font-medium">{label}</span>
        </label>
      )}
      <input
        ref={ref}
        type="text"
        className={clsx('input', error && 'input-error', className)}
        {...rest}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </label>
      )}
    </div>
  )
})

export default TextField

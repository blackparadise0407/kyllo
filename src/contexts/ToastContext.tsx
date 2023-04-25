import { produce } from 'immer'
import { createContext, useCallback, useState, type ReactNode } from 'react'

import { ToastCard } from '@/components'

type EnqueueOpts = Pick<Toast, 'variant'>

interface EnqueueFn {
  (message: string, opts?: EnqueueOpts): void
}

interface DequeueFn {
  (id?: Toast['id']): void
}

interface ToastProviderProps {
  children: ReactNode
}

interface IToastContext {
  enqueue: EnqueueFn
}

export const ToastContext = createContext<IToastContext>({
  enqueue: () => {},
})

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const handleEnqueue: EnqueueFn = useCallback(
    (
      message,
      opts = {
        variant: 'success',
      },
    ) => {
      setToasts(
        produce((draft) => {
          draft.push({
            id: `${Date.now()}-${Math.random() * 10000}`,
            message,
            variant: opts.variant,
          })
        }),
      )
    },
    [],
  )

  const handleDequeue: DequeueFn = useCallback((id) => {
    setToasts(
      produce((draft) => {
        const foundIdx = draft.findIndex((it) => it.id === id)
        if (foundIdx > -1) {
          draft.splice(foundIdx, 1)
        }
      }),
    )
  }, [])

  return (
    <ToastContext.Provider value={{ enqueue: handleEnqueue }}>
      {children}
      <div className="toast">
        {toasts.map((it) => (
          <ToastCard key={it.id} data={it} onClose={handleDequeue} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

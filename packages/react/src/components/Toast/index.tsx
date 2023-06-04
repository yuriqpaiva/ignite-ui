import { ComponentProps, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { StyledToastContainer, ToastContent } from './styles'
import { X } from 'phosphor-react'
import { Text } from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title?: string
  subtitle?: string
  isOpen?: boolean
}

export function Toast({ title, subtitle, isOpen, ...props }: ToastProps) {
  const [toastVisible, setToastVisible] = useState(isOpen)

  useEffect(() => {
    setToastVisible(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (title && toastVisible) {
      toast(
        <ToastContent>
          {title && <Text as="strong">{title}</Text>}
          {subtitle && <Text as="small">{subtitle}</Text>}
          <button onClick={() => toast.dismiss()}>
            <X size={24} />
          </button>
        </ToastContent>,
      )
    }
  }, [title, subtitle, toastVisible])

  if (!toastVisible) {
    toast.dismiss()
  }

  return (
    <StyledToastContainer
      position="top-left"
      autoClose={false}
      closeButton={false}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      {...props}
    />
  )
}

import React, { useCallback, useContext } from 'react'
import { useNotification } from 'rc-notification'
import { NotificationAPI } from 'rc-notification/es/useNotification'
import { OpenConfig } from 'rc-notification/es/Notifications'
import { Notification, NotificationProps } from '../components/Notification/Notification'

export type OpenNotifyProps = Omit<Partial<OpenConfig>, 'content'> & NotificationProps

export interface UseNotify extends Omit<NotificationAPI, 'open'> {
  open: (props: OpenNotifyProps) => void
}

const NotifyContext = React.createContext<NotificationAPI>(undefined as any)

const NotifyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifyAPIs, notificationHolder] = useNotification({
    maxCount: 5,
    duration: 5,
  })

  return (
    <NotifyContext.Provider
      value={notifyAPIs}
    >
      {notificationHolder}
      {children}
    </NotifyContext.Provider>
  )
}

const useNotify = (): UseNotify => {
  const { open: _open, close, destroy } = useContext(NotifyContext)

  const open = useCallback((props: OpenNotifyProps) => {
    const { title, variant, description, ...rest } = props

    _open({
      ...rest,
      content: <Notification title={title} variant={variant} description={description} />
    })
  }, [_open])

  return {
    open,
    close,
    destroy
  }
}

export {
  useNotify,
  NotifyProvider
}

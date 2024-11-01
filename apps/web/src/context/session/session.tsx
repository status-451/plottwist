'use client'

import { User } from '@/types/user'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

type SessionContextProviderProps = PropsWithChildren & {
  initialUser: User
}

type SessionContext = {
  user: User
}

export const SessionContext = createContext({} as SessionContext)

export const SessionContextProvider = ({
  children,
  initialUser,
}: SessionContextProviderProps) => {
  const [user, setUser] = useState<User>(initialUser)

  useEffect(() => {
    setUser(initialUser)
  }, [initialUser])

  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error('SessionContext must be used within SessionContextProvider')
  }

  return context
}
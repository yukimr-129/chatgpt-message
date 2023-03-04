'use client'

import { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'
import { memo, ReactNode } from 'react'

type Props = {
  children: ReactNode
  session: Session | null
}

/* 
server componentはimportできない為、
childrenとしてclient componentに渡す
*/
export const SessionProvider = memo(({ children, session }: Props) => {
  return <Provider>{children}</Provider>
})

SessionProvider.displayName = 'SessionProvider'

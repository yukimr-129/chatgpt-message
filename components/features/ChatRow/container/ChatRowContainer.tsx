'use client'

import { collection, deleteDoc, doc } from 'firebase/firestore'

import { usePathname, useRouter } from 'next/navigation'
import type { Session } from 'next-auth'

import { memo, useCallback } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { ChatRowPresenter } from '../presenter/ChatRowPresenter'

import { db } from '@/firebase'

type Props = {
  id: string
  session: Session | null
}
export const ChatRowContainer = memo(({ id, session }: Props) => {
  console.log(id)

  const pathName = usePathname()
  const router = useRouter()

  // Serverコンポーネントに移動 layout.tsx
  const [message] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
  )

  // ------------------------

  const removeChat = useCallback(async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))

    router.replace('/')
  }, [id])

  const active = pathName ? pathName?.includes(id) : false

  return <ChatRowPresenter message={message} id={id} active={active} removeChat={removeChat} />
})

ChatRowContainer.displayName = 'ChatRowContainer'

'use client'

import { collection, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { memo } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { MessageListPresenter } from '../presenter/MessageListPresenter'
import { db } from '@/firebase'

type Props = {
  chatId: string
}

export const MessageListContainer = memo(({ chatId }: Props) => {
  console.log('MessageContainer')
  const { data: session } = useSession()

  const [messages] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats', chatId, 'messages'),
        orderBy('createdAt', 'asc'),
      ),
  )

  console.log(messages?.docs)

  return <MessageListPresenter messages={messages} />
})

MessageListContainer.displayName = 'MessageListContainer'

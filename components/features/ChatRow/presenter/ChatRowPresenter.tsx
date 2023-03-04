'use client'

import { ChatBubbleOvalLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import type { DocumentData, QuerySnapshot } from 'firebase/firestore'
import Link from 'next/link'
import { memo, useMemo } from 'react'

type Props = {
  id: string
  message: QuerySnapshot<DocumentData> | undefined
  active: boolean
  removeChat: () => void
}
export const ChatRowPresenter = memo(({ id, message, active, removeChat }: Props) => {
  const messageText = message?.docs[message.docs.length - 1]?.data().text || 'new Chat'
  const activeStyle = active && 'bg-gray-700/50'

  const ChatBubbleOvalIcon = useMemo(() => {
    return <ChatBubbleOvalLeftIcon className='h-5 w-5' />
  }, [])

  const Tras = useMemo(() => {
    return <TrashIcon onClick={removeChat} className='h-5 w-5 text-gray-700 hover:text-red-700' />
  }, [removeChat])

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${activeStyle}`}>
      {/* <ChatBubbleOvalLeftIcon className='h-5 w-5' /> */}
      {ChatBubbleOvalIcon}
      <p className='flex-1 hidden md:inline-flex truncate'>{messageText}</p>
      {/* <TrashIcon onClick={removeChat} className='h-5 w-5 text-gray-700 hover:text-red-700' /> */}
      {Tras}
    </Link>
  )
})

ChatRowPresenter.displayName = 'ChatRowPresenter'

/* eslint-disable @next/next/no-img-element */
'use client'

import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import type { DocumentData, QuerySnapshot } from 'firebase/firestore'
import { memo, useMemo } from 'react'
import { Message } from '../../Message'
type Props = {
  messages: QuerySnapshot<DocumentData> | undefined
}
export const MessageListPresenter = memo(({ messages }: Props) => {
  const ArrowDownIcon = useMemo(() => {
    return <ArrowDownCircleIcon className='h-10 w-10 mx-auto mt-5 text-white animate-bounce' />
  }, [])
  return (
    <div className='flex-1 overflow-y-auto overflow-x-hidden'>
      {messages?.empty && (
        <>
          <p className='mt-10 text-center text-white'>Type a prompt in below get startes!</p>
          {ArrowDownIcon}
        </>
      )}
      {messages?.docs.map((message) => {
        return <Message key={message.id} message={message.data()} />
      })}
    </div>
  )
})

MessageListPresenter.displayName = 'MessageListPresenter'

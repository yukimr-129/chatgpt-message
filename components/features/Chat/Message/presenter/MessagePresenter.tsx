/* eslint-disable @next/next/no-img-element */
'use client'

import type { DocumentData } from 'firebase/firestore'
import { memo } from 'react'
type Props = {
  message: DocumentData
}
export const MessagePresenter = memo(({ message }: Props) => {
  console.log('MessagePresenter')
  const isChatGPT = message.user.name === 'ChatGPT'

  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
      <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <img src={message.user.avater} alt=' profile avater' className='h-8 w-8' />
        <p className='pt-1 text-sm'>{message.text}</p>
      </div>
    </div>
  )
})

MessagePresenter.displayName = 'MessagePresenter'

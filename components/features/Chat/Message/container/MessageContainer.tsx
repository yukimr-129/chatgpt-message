'use client'

import type { DocumentData } from 'firebase/firestore'
import { memo } from 'react'
import { MessagePresenter } from '../presenter/MessagePresenter'

type Props = {
  message: DocumentData
}

export const MessageContainer = memo(({ message }: Props) => {
  console.log('MessageContainer', message)

  return <MessagePresenter message={message} />
})

MessageContainer.displayName = 'MessageContainer'

'use client'

import type { DocumentData, QuerySnapshot } from 'firebase/firestore'
import type { Session } from 'next-auth'
import { ChangeEvent, FormEvent, memo } from 'react'
import { Message } from '../Message'
import { MessageList } from '../MessageList'
import { ChatInput } from '@/components/ui/ChatInput'
import { Data } from '@/pages/api/getModel'
type Props = {
  chatId: string
  session: Session | null
  sendMassage: (e: FormEvent<HTMLFormElement>) => void
  prompt: string
  handleInputPrompt: (e: ChangeEvent<HTMLInputElement>) => void
  isLoading: boolean
  models: Data | undefined
  // messages: QuerySnapshot<DocumentData> | undefined
}

export const ChatPresenter = memo(
  ({ chatId, session, sendMassage, prompt, handleInputPrompt, models, isLoading }: Props) => {
    console.log('ChatPresenter')

    return (
      <div className='flex flex-col h-screen overflow-hidden'>
        {/* Chat */}
        <MessageList chatId={chatId} />

        {/* ChatInput */}
        <ChatInput
          chatId={chatId}
          models={models}
          isLoading={isLoading}
          session={session}
          sendMassage={sendMassage}
          prompt={prompt}
          handleInputPrompt={handleInputPrompt}
        />
      </div>
    )
  },
)

ChatPresenter.displayName = 'ChatPresenter'

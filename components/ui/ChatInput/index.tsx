'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Session } from 'next-auth'
import { ChangeEvent, FormEvent, memo, useMemo, useState } from 'react'
import { ModelSelect } from '../ModelSelect'
import { Button } from '@/components/common/Button'
import { Data } from '@/pages/api/getModel'

type Props = {
  chatId: string
  session: Session | null
  sendMassage: (e: FormEvent<HTMLFormElement>) => void
  prompt: string
  handleInputPrompt: (e: ChangeEvent<HTMLInputElement>) => void
  models: Data | undefined
  isLoading: boolean
}

export const ChatInput = memo(
  ({ chatId, session, sendMassage, prompt, handleInputPrompt, models, isLoading }: Props) => {
    const PaperIcon = useMemo(() => {
      return <PaperAirplaneIcon className='w-4 h-4 -rotate-45' />
    }, [])

    return (
      <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
        <form onSubmit={sendMassage} className='p-5 flex space-x-5'>
          <input
            className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
            disabled={!session}
            value={prompt}
            onChange={handleInputPrompt}
            type='text'
            placeholder='メッセージを入力'
          />
          <Button
            type='submit'
            disabled={!prompt || !session}
            buttonStyle='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            {/* <PaperAirplaneIcon className='w-4 h-4 -rotate-45' /> */}
            {PaperIcon}
          </Button>
        </form>

        <div className='md:hidden'>
          <ModelSelect models={models} isLoading={isLoading} />
        </div>
      </div>
    )
  },
)

ChatInput.displayName = 'ChatInput'

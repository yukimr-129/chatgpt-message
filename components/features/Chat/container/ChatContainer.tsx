'use client'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { ChangeEvent, FormEvent, memo, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import { ChatPresenter } from '../presenter/ChatPresenter'
import { db } from '@/firebase'
import { useFetchModelhSwr } from '@/lib/swr/useFetchSwr'
import { Massage } from '@/typing'

type Props = {
  chatId: string
}

export const ChatContainer = memo(({ chatId }: Props) => {
  console.log('ChatContainer')

  const { data: session } = useSession()

  const [prompt, setPrompt] = useState('')

  const { data: models, isLoading } = useFetchModelhSwr('/api/getModel')
  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  })

  const handleInputPrompt = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPrompt(e.target.value)
    },
    [setPrompt],
  )

  const sendMassage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt) return

    const notification = toast.loading('ChatGPT is thinking...')

    const input = prompt.trim()
    setPrompt('')

    const message: Massage = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avater: session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    }

    try {
      await addDoc(
        collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
        message,
      )

      // Toast

      await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model,
          session,
        }),
      })

      // Toast
      toast.success('ChatGPT has responeded!', { id: notification })
      console.log(input)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ChatPresenter
      chatId={chatId}
      models={models}
      isLoading={isLoading}
      // messages={messages}
      session={session}
      sendMassage={sendMassage}
      prompt={prompt}
      handleInputPrompt={handleInputPrompt}
    />
  )
})

ChatContainer.displayName = 'ChatContainer'

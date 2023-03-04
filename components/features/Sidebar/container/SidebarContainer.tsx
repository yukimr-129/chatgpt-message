/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore'

import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { memo, useCallback } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

import { SidebarPresenter } from '../presenter/SidebarPresenter'
import { db } from '@/firebase'
import { useFetchModelhSwr } from '@/lib/swr/useFetchSwr'

export const SidebarContainer = memo(() => {
  const { data: session } = useSession()
  const router = useRouter()

  const { data: models, isLoading } = useFetchModelhSwr('/api/getModel')

  // Serverコンポーネントに移動　ーーーーーーーーー layout.tsx
  const [chats, loading, error] = useCollection(
    session &&
      query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc')),
  )

  const chatIds = chats?.docs.map((chat) => {
    return chat.id
  })
  // ーーーーーーーーーーーー

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      messages: [],
      userId: session?.user?.email!,
      createdAt: serverTimestamp(),
    })

    router.push(`/chat/${doc.id}`)
  }

  const handleSignOut = useCallback(() => {
    signOut()

    router.replace('/')
  }, [])

  return (
    <SidebarPresenter
      models={models}
      isLoading={isLoading}
      loading={loading}
      session={session}
      chatIds={chatIds}
      onClickSignOut={handleSignOut}
      onClickCreateNewChat={createNewChat}
    />
  )
})

SidebarContainer.displayName = 'SidebarContainer'

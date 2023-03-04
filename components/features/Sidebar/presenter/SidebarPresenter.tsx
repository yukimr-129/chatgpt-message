'use client'

import Image from 'next/image'
import type { Session } from 'next-auth'
import { memo } from 'react'
import { ChatRow } from '../../ChatRow'
import { ModelSelect, NewChat } from '@/components/ui'
import { Data } from '@/pages/api/getModel'

type Props = {
  models: Data | undefined
  isLoading: boolean
  loading: boolean
  session: Session | null
  chatIds: string[] | undefined
  onClickSignOut: () => void
  onClickCreateNewChat: () => void
}

export const SidebarPresenter = memo(
  ({
    session,
    chatIds,
    onClickSignOut,
    onClickCreateNewChat,
    models,
    isLoading,
    loading,
  }: Props) => {
    const profileImg = session?.user?.image || ''

    return (
      <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
          <div>
            {/* NewChat */}
            <NewChat onClickCreateNewChat={onClickCreateNewChat} />

            <div className='hidden sm:inline'>
              <ModelSelect models={models} isLoading={isLoading} />
            </div>

            <div className='flex flex-col space-y-2 my-2'>
              {loading && (
                <div className='animate-pulse text-center text-white'>
                  <p>Loding Chats...</p>
                </div>
              )}
              {/* ChatRows TODO：ChatRowListに書き換え*/}
              {chatIds?.map((chatId) => (
                <ChatRow key={chatId} id={chatId} session={session} />
              ))}
            </div>
          </div>
        </div>

        {session && (
          <Image
            onClick={onClickSignOut}
            className='rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
            width={60}
            height={60}
            src={profileImg}
            alt='profile写真'
          />
        )}
      </div>
    )
  },
)

SidebarPresenter.displayName = 'SidebarPresenter'

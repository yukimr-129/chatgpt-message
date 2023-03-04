import { PlusIcon } from '@heroicons/react/24/solid'
import { memo } from 'react'

type Props = {
  onClickCreateNewChat: () => void
}

export const NewChat = memo(({ onClickCreateNewChat }: Props) => {
  return (
    <div onClick={onClickCreateNewChat} className='border-gray-700 border chatRow'>
      <PlusIcon className='h-4 w-4' />
      <p>New Caht</p>
    </div>
  )
})

NewChat.displayName = 'NewChat'

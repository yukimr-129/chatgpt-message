'use client'

import Image from 'next/image'
import { memo } from 'react'
import { Button } from '@/components/common/Button'

type Props = {
  onClickSignIn: () => void
}

export const LoginPresenter = memo(({ onClickSignIn }: Props) => {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
      <Image src='https://links.papareact.com/2i6' width={300} height={300} alt='logo' priority />
      <Button
        onClickHnadler={onClickSignIn}
        buttonStyle='text-white font-bold text-3xl animate-pulse'
      >
        SignIn
      </Button>
    </div>
  )
})

LoginPresenter.displayName = 'LoginPresenter'

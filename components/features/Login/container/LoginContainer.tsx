'use client'

import { signIn } from 'next-auth/react'
import { memo, useCallback } from 'react'

import { LoginPresenter } from '../presenter/LoginPresenter'

export const LoginContainer = memo(() => {
  const handleSignIn = useCallback(() => {
    signIn('google')
  }, [])

  return <LoginPresenter onClickSignIn={handleSignIn} />
})

LoginContainer.displayName = 'LoginContainer'

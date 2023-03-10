import { getServerSession } from 'next-auth'

import { ToastProvider } from '@/components/common/Toast/ToastProvider'
import { Login } from '@/components/features/Login'
import { SideBar } from '@/components/features/Sidebar'
import { SessionProvider } from '@/components/functional/auth/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import './global.css'

// head情報
export const metadata = {
  title: 'Chat Gpt Messenger',
  description: 'Generated by create next app',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  return (
    <html lang='ja'>
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              {/* SideBa r */}
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <SideBar />
              </div>
              {/* ChatContent */}

              <ToastProvider />
              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout

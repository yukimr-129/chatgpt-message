/* eslint-disable react/no-unescaped-entities */
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>Chat Gpt Messenger</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* ICON */}
            <SunIcon className='w-6 h-6' />
            <h2 className=''>Example</h2>
          </div>

          <div className='space-y-2'>
            <p className='infotext'>explain something to me</p>
            <p className='infotext'>"what is the differense between a dog and a cat?"</p>
            <p className='infotext'>"what is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* ICON */}
            <BoltIcon className='w-6 h-6' />
            <h2 className=''>Capabillties</h2>
          </div>

          <div className='space-y-2'>
            <p className='infotext'>Remembers what user said earlier in the conversation</p>
            <p className='infotext'>Allows user to provide follow-up corrections</p>
            <p className='infotext'>Trained to decline inappropriate requests</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* ICON */}
            <ExclamationTriangleIcon className='w-6 h-6' />
            <h2 className=''>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infotext'>May occasionally generate incorrect information</p>
            <p className='infotext'>
              May occasionally produce harmful instructions or biased content
            </p>
            <p className='infotext'>Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import { Chat } from '@/components/features/Chat'

type Props = {
  params: {
    id: string
  }
}

const ChatPage = ({ params: { id } }: Props) => {
  console.log(id)

  return <Chat chatId={id} />
}

export default ChatPage

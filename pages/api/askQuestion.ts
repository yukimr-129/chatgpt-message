import admin from 'firebase-admin'
import type { NextApiRequest, NextApiResponse } from 'next'

import { Session } from 'next-auth'
import adminDb from '@/firebaseAdmin'
import { query } from '@/lib/queryApi'
import { Massage } from '@/typing'

type Data = {
  answer: string
}

type RequestData = {
  prompt: string
  chatId: string
  model: string
  session: Session | null
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { prompt, chatId, model, session } = req.body

  if (!prompt) {
    res.status(400).json({ answer: 'Please provide a prompt' })
    return
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Please provide a Valid ChatId' })
    return
  }

  const response = await query(prompt, chatId, model)
  const massage: Massage = {
    text: response || 'ChatGPT was unsable to find an answer for that',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avater: 'https://links.papareact.com/89k',
    },
  }

  await adminDb
    .collection('users')
    .doc(session.user.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(massage)

  res.status(200).json({ answer: massage.text })
}

export default handler

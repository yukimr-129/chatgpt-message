import { Session } from 'next-auth'

type useFetchMessageType = (
  input: string,
  model: string,
  session: Session,
) => Promise<{
  data: string
  error: string | undefined
}>

// TODO:　宣言的にfetch
export const useFetchMessage: useFetchMessageType = async (input, model, session) => {
  let error = undefined

  const responceMassage = await fetch('/api/askQuestion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: input,
      chatId: model,
      session,
    }),
  }).catch((e) => {
    return e
  })

  return { data: '', error }
}

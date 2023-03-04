import openai from './chatgpt/chatgpt'

export const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const res = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.6,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    const chatRasponse = res.data.choices[0].text

    return chatRasponse
  } catch (error: any) {
    return `Error: ${error.massage}`
  }
}

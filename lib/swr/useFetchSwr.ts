import useSWR from 'swr'
import type { Fetcher } from 'swr'
import { Data } from '@/pages/api/getModel'

const modelFetcher: Fetcher<Data, string> = async (key) => {
  const res = await fetch(key)
  const data = await res.json()
  return data
}

export const useFetchModelhSwr = (key: string) => {
  const { data, isLoading } = useSWR<Data>(key, modelFetcher)

  return { data, isLoading }
}

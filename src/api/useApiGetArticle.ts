import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { TFeedItem } from '@/types'
import { TReactQuery } from './types'
import { CACHE_TIME_MS } from './constants'

const getArticle = async (id?: string): Promise<TFeedItem> => {
  const { data } = await axios.get<TFeedItem>(`https://63c652e7dcdc478e15bf1f66.mockapi.io/news/${id}`)
  return data
}

export const useApiGetArticle = (id?: string): TReactQuery<TFeedItem> => {
  const { data, isError, isLoading } = useQuery(
    ['getArticle'],
    () => getArticle(id),
    { enabled: !!id, cacheTime: CACHE_TIME_MS }
  )
  return { data, isError, isLoading }
}

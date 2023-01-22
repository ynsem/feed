import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { TFeed } from '@/types'
import { TReactQuery } from './types'

const getFeed = async (): Promise<TFeed> => {
  const { data } = await axios.get<TFeed>('https://63c652e7dcdc478e15bf1f66.mockapi.io/news?sortBy=createdAt&order=desc')
  return data
}

export const useApiGetFeed = (): TReactQuery<TFeed> => {
  const { data, isError, isLoading } = useQuery(
    ['getFeed'],
    () => getFeed(),
  )
  return { data, isError, isLoading }
}

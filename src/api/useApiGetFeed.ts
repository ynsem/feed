import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { TFeed } from '@/types'
import { TReactQuery } from './types'
import { APP_URL } from './constants'

const getFeed = async (): Promise<TFeed> => {
  const { data } = await axios.get<TFeed>(`${APP_URL}/news?sortBy=createdAt&order=desc`)
  return data
}

export const useApiGetFeed = (): TReactQuery<TFeed> => {
  const { data, isError, isLoading } = useQuery(
    ['getFeed'],
    () => getFeed(),
  )
  return { data, isError, isLoading }
}

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { TCommentList } from '@/types'
import { TReactQuery } from './types'
import { CACHE_TIME_MS, APP_URL } from './constants'

const getComments = async (id?: string): Promise<TCommentList> => {
  const { data } = await axios.get<TCommentList>(`${APP_URL}/news/${id}/comments`)
  return data
}

export const useApiGetComments = (id?: string): TReactQuery<TCommentList> => {
  const { data, isError, isLoading } = useQuery(
    ['getComments'],
    () => getComments(id),
    { enabled: !!id, cacheTime: CACHE_TIME_MS }
  )
  return { data, isError, isLoading }
}

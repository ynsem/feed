import { QueryObserverResult } from '@tanstack/react-query'

export interface TReactQuery<T> {
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
  data?: T
  error?: string,
  refetch?: () => Promise<QueryObserverResult<T>>
  isRefetching?: boolean
}
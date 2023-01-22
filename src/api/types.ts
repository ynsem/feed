export interface TReactQuery<T> {
  isLoading?: boolean
  isError?: boolean
  data?: T
}
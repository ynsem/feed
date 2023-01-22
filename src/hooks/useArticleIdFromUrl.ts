import { useLocation } from 'react-use'

import RouterPath from '@/router/RouterPath'

export const useArticleIdFromUrl = () => {
  const { pathname } = useLocation()
  const [ , articleId ] = pathname?.split(`${RouterPath.Feed}/`) ?? [,]

  return articleId
}
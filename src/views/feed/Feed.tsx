import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import RouterPath from '@/router/RouterPath'

import * as S from './Feed.style'

const Feed = () => {
  const navigate = useNavigate()

  return (
    <>
      FEED
      <button type='button' onClick={() => { navigate(RouterPath.Article) }}></button>
    </>
  )
}

export default Feed

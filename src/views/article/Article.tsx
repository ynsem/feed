import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './Article.style'

const Article = () => {
  const navigate = useNavigate()

  return (
    <>
      ARTICLE
      <button type='button' onClick={() => { navigate(-1) }}></button>
    </>
  )
}

export default Article

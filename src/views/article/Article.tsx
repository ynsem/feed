import * as React from 'react'

import { Loader, Center } from '@mantine/core';
import Card from '@/components/card'
import ReturnButton from '@/components/returnButton'

import { useArticleIdFromUrl } from '@/hooks/useArticleIdFromUrl'
import { useApiGetArticle } from '@/api/useApiGetArticle'

import * as S from './Article.style'

const Article = () => {
  const articleId = useArticleIdFromUrl()
  const { data, isError, isLoading } = useApiGetArticle(articleId)

  return (
    <>
      {
        !isLoading ?
          <>
            <ReturnButton />
            <Card {...data} />
          </>
          :
          <Center>
            <Loader />
          </Center>
      }
    </>
  )
}

export default Article

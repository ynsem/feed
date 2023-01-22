import * as React from 'react'

import { Loader, Center } from '@mantine/core';
import Comment from '@/components/comment'

import { useApiGetComments } from '@/api/useApiGetComments'

import * as S from './CommentList.style'

type TProps = {
  id?: string
}

const CommentList = ({ id }: TProps) => {
  const { data, isLoading, isError } = useApiGetComments(id)

  return (
    <S.CommentListWrapper>
      {
        !isLoading ?
          <>
            {
              data?.map(comment => (
                <Comment
                  key={comment.id}
                  {...comment}
                />
              ))
            }
          </>
          :
          <Center>
            <Loader />
          </Center>
      }

    </S.CommentListWrapper>
  )
}

export default CommentList

import * as React from 'react'
import { Loader, Center } from '@mantine/core';
import FeedItem from '@/components/feedItem'
import { useApiGetFeed } from '@/api/useApiGetFeed'

import * as S from './Feed.style'

const Feed = () => {
  const { data, isLoading, isError } = useApiGetFeed()

  return (
    <S.FeedWrapper>
      {
        !isLoading ?
          <>
            {
              data?.map(feedItem => (
                <FeedItem
                  key={feedItem.id}
                  {...feedItem}
                />
              ))
            }
          </>
          :
          <Center>
            <Loader />
          </Center>
      }

    </S.FeedWrapper>
  )
}

export default Feed

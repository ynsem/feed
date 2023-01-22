import Card from '@/components/card'
import RouterPath from '@/router/RouterPath'
import { TFeedItem } from '@/types'

import * as S from './FeedItem.style'

type TProps = TFeedItem

const FeedItem = ({ id, ...props }: TProps) => {
  return (
    <S.FeedItem>
      <S.FeedItemLink to={`${RouterPath.Feed}/${id}`}>
        <Card {...props} />
      </S.FeedItemLink>
    </S.FeedItem>
  )
}

export default FeedItem

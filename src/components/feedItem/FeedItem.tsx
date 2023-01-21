import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { formatDate } from '@/helpers/dateFormat';
import RouterPath from '@/router/RouterPath'
import { TFeedItem } from '@/types'

import * as S from './FeedItem.style'

type TProps = TFeedItem

const FeedItem = ({ author, createdAt, id, image, name, text, views }: TProps) => {
  return (
    <S.FeedItem>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <S.FeedItemLink to={`${RouterPath.Feed}/${id}`}>
          <Card.Section>
            <Image
              src={image}
              height={160}
              alt="cover"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} c="blue">{name}</Text>
            <Text>{formatDate(createdAt)}</Text>
          </Group>

          <Group position="apart" mt="md" mb="xs">
            <Text size="sm">
              {text}
            </Text>
          </Group>

          <Group position="apart" mt="md" mb="xs">
            <Text c="blue">{author}</Text>
            <Badge variant="light">
              {views}
            </Badge>
          </Group>
        </S.FeedItemLink>
      </Card>
    </S.FeedItem>
  )
}

export default FeedItem

import { Card as MCard, Image, Text, Badge, Group } from '@mantine/core';
import { formatDate } from '@/helpers/dateFormat';
import { TFeedItem } from '@/types'

type TProps = Omit<TFeedItem, 'id'>

const Card = ({ author, createdAt, image, name, text, views }: TProps) => {
  return (
    <MCard shadow='sm' p="lg" radius="md" withBorder>
      <MCard.Section>
        <Image
          src={image}
          height={160}
          alt="cover"
        />
      </MCard.Section>

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
    </MCard>
  )
}

export default Card

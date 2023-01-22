import { Card, Avatar, Text, Group } from '@mantine/core';

import { formatDate } from '@/helpers/dateFormat';
import { TComment } from '@/types'

import * as S from './Comment.style'

type TProps = Omit<TComment, 'id' | 'newsId'>

const Comment = ({ createdAt, avatar, author, text }: TProps) => {
  return (
    <S.CommentWrapper>
      <Card p="sm" radius="md" withBorder>
        <Group position="apart" mt="xs" mb="xs" align="top">
          <Avatar size="md" src={avatar} alt="avatar" />
          <Text c="blue">{author}</Text>
        </Group>

        <Group position="apart" mt="xs" mb="xs">
          <Text size="sm">{text}</Text>
        </Group>

        <Group position="apart" mt="xs" mb="xs">
          <Text>{formatDate(createdAt)}</Text>
        </Group>
      </Card>
    </S.CommentWrapper>
  )
}

export default Comment

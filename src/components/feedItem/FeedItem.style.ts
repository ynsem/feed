import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { css } from '@/theme'

const { gaps } = css

export const FeedItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: ${gaps.md};
  }
`

export const FeedItemLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`
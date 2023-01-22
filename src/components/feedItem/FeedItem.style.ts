import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { css } from '@/theme'

const { gaps } = css

export const FeedItem = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: ${gaps.md};
  }

  :hover {
    transform: scale(1.02);
    transition-duration: 300ms;
  }
`

export const FeedItemLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import { css } from '../../theme'

const { gaps } = css

export const CommentWrapper = styled.li`
  list-style: none;

  :not(:last-child) {
    margin-bottom: ${gaps.md};
  }
`
import styled from '@emotion/styled'
import { css } from '@/theme'

const { gaps } = css

export const FeedWrapper = styled.section`
  > * {
    :not(:last-child) {
      margin-bottom: ${gaps.md};
    }
  }
`
import styled from '@emotion/styled'
import { css } from '@/theme'

const { gaps } = css

export const MainLayoutWrapper = styled.main`
  position: relative;
  height: 100%;
  padding: ${gaps.lg} 0;
`

export const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: ${gaps.sm};
  right: ${gaps.md};
`
import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Loader } from '@mantine/core';
import ThemeSwitcher from '@/components/themeSwitcher'
import RouterPath from '@/router/RouterPath'

import * as S from './MainLayout.style'

const MainLayout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(RouterPath.Feed);
  }, []);

  return (
    <S.MainLayoutWrapper>
      <S.ThemeSwitcherContainer>
        <ThemeSwitcher />
      </S.ThemeSwitcherContainer>

      <React.Suspense
        fallback={<Loader />}
      >
        <Container size="md">
          <Outlet />
        </Container>
      </React.Suspense>
    </S.MainLayoutWrapper>
  )
}

export default MainLayout
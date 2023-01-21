import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Container, Loader, Center } from '@mantine/core';
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
        fallback={
          <Center>
            <Loader />
          </Center>
        }
      >
        <Container size="sm">
          <Outlet />
        </Container>
      </React.Suspense>
    </S.MainLayoutWrapper>
  )
}

export default MainLayout
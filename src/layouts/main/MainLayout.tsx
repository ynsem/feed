import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import RouterPath from '@/router/RouterPath'

import * as S from './MainLayout.style'

const MainLayout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(RouterPath.Feed);
  }, []);

  return (
    <>
      <h1>MAINLAYOUT</h1>
      <React.Suspense
        fallback="Loading..."
      >
        <Outlet />
      </React.Suspense>
    </>
  )
}

export default MainLayout

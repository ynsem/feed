import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { routes } from '@/router'

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <RouterProvider router={routes()} />
  </MantineProvider>
)

export default App

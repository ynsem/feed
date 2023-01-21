import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { routes } from '@/router'

const App = () => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');

  const toggleColorScheme = (theme?: ColorScheme) =>
    setColorScheme(theme || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <RouterProvider router={routes()} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App

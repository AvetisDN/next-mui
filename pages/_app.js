import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../lib/createEmotionCache'
import lightTheme from '../themes/lightTheme'
import darkTheme from '../themes/darkTheme'

const clientSideCache = createEmotionCache()

function MyApp(props) {
  const { Component, emotionCache = clientSideCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

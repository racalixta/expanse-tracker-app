import type { AppProps } from 'next/app'
import { ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { theme } from '../styles/theme'
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

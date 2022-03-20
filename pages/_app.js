import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyles from '../styles/Global'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
  
}

export default MyApp

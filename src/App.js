import React from 'react'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Theme from './theme/theme'
import Header from './components/header'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App

// AppContainer styles. Centers <Header /> component
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #1d1f27;
  color: ${props => props.theme.colors.white};;
`
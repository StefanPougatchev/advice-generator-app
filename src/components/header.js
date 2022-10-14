import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <Intro>
    <h1>CRA Styled-Components</h1>
    <h4>Enjoy and build passionately!</h4>
  </Intro>
)

export default Header

const Intro = styled.div`
  text-align: center;
  font-size: 2vw;
`
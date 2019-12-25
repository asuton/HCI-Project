//stilizirana link komponenta koja je bijela
//koristi se kod komponenta card.js i stranice login.js za botune

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLinkW = styled(props => <Link {...props} />)`
  color: #FFFFFF;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  &:hover{
    color: #FFFFFF;
  }
`;

export default StyledLinkW
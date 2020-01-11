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
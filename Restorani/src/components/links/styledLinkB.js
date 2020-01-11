import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLinkB = styled(props => <Link {...props} />)`
  color: #000000;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  &:hover{
    color: #707070;
  }
`;

export default StyledLinkB
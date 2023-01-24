
import React from 'react'
import Login from './account/Login'
import {AppBar , Box, Toolbar, styled} from '@mui/material'
const Component=styled(Box)`
    height:100vh;
    background:#DCDCDC
`
const Header = styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shadow:none;
`   
export default function Messenger() {
  return (
    <Component>
    <Header>
        <Toolbar>

        </Toolbar>
    </Header>
      <Login/>
    </Component>
  )
}
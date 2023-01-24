
import React from 'react'
import Login from './account/Login'
import {AppBar , Box, Toolbar, styled} from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from '../components/chat/ChatDialog';

const Component=styled(Box)`
    height:100vh;
    background:#DCDCDC
`
const Header = styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shadow:none;
`   
const LoginHeader = styled(AppBar)` 
    height:125px;
    background-color:#00bfa5;
    box-shadow:none;
`
export default function Messenger() {
    const {account}=useContext(AccountContext);
  return (
    <Component>
        {
            account ? <>
                  <LoginHeader>
                      <Toolbar>
                      </Toolbar>
                  </LoginHeader>
                  <ChatDialog /> 
            </> :
        <>
    <Header>
        <Toolbar>
        </Toolbar>
    </Header>
      <Login/>
        </>
        }
    </Component>
  )
}
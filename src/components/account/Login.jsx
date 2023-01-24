import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem, Typography } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import styled from '@emotion/styled';
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';

const Component=styled(Box)`
    display:flex;
`;
const Container=styled(Box)`
    padding:56px 0 56px 56px;
`;
const styleDialog={
    height:"96%",
    marginTop:"12%",
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}
const QRCODE=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 150px',
});
const Title = styled(Typography)`
    font-size:30px;
    color:#525252;
    font-Width:300;
    font-family:inherit;
    margin-bottom:25px;
`;
const StyledList = styled(List)`
    $ > li {
        padding:0;
        margin-top:15px;
        line-height:28px;
        font-size:18px;
        color:#4A4A4A4A;
    }
`;
export default function Login() {
    const {setAccount}=useContext(AccountContext);


    const onLoginSuccess =(res)=>{
        console.log({res:res})
        const decode=jwt_decode(res.credential);
        setAccount(decode);
        console.log({decode:decode})
    }

     const onLoginError =(res)=>{
            console.log("Failed to connect",res)
    }

  return (
   <Dialog
    open={true}
    PaperProps={{sx:styleDialog}}
    hideBackdrop={true}
    >
        <Component>
            <Container>
             <Title>To use WhatsApp on your computer : </Title>
             <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap Menu Setting and select WhatsApp web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>               
             </StyledList>
            </Container>
            <Box style={{position:'relative'}}>
                <QRCODE src={qrCodeImage} alt='QR code'/>
                  <Box style={{ position: 'absolute',top:'50%',transform:'translateX(75%)' }}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>
   </Dialog>
  )
}

import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem, Typography } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import styled from '@emotion/styled';
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
  return (
   <Dialog
    open={true}
    PaperProps={{sx:styleDialog}}
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
            <Box>
                <QRCODE src={qrCodeImage} alt='QR code'/>
            </Box>
        </Component>
   </Dialog>
  )
}

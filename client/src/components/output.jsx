import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CopyToClipBoard from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';



const OutQuery = ({ Out, DoCopy }) => {
    console.log({ Out });
    return (
        <><div className="output-box">


            <Outbox>
                <Script>{Out}</Script>
                {DoCopy && <CopyBox>
                    <IconBox>
                        <OnlyIcon><FiCopy /></OnlyIcon>
                        <CopyToClipBoard text={Out}>
                            <CopyBtn>
                                <Copytxt>Copy Query</Copytxt>
                            </CopyBtn>
                        </CopyToClipBoard>

                    </IconBox>

                </CopyBox>}



            </Outbox >
        </div>
        </>
    );
}

export default OutQuery;

const Outbox = styled(Box)`
border : 2px solid #FFF;
 width : 33%;
 margin-left: 34%;
 margin-top: 2%;
 min-height : 28%;

 
 color : #FFF;
 font-size: 1.4rem;
 
 
`
const Script = styled(Typography)`

padding : 0% 4% 0% 7%;
margin-top:13%;
text-align:center;
font-weight:600;

`
const IconBox = styled(Box)`
border : 0.1rem solid #FFF;
display:flex;
row-gap: 0%;
width : 34%;
margin-top:5%;
margin-left:32%;
padding: 0.5% 0% 1% 2%;
cursor : pointer;

&:hover {
    border-width: 0.145rem;
    font-weight:700;
} 

`
const Copytxt = styled(Typography)`
padding-left:3%;
color:#FFF;
font-size: 0.99rem;
font-weight : 700;


`

const CopyBox = styled(Box)`
padding : 5% 0% 1.5% 0%;


`
const CopyBtn = styled(Button)`
width : 78%;
margin-right:6%;

`
const OnlyIcon = styled(Box)`
text-align:center;
margin-top : 5%;
margin-left : 0%;
padding : 0%;

`
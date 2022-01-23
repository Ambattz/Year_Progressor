import React from 'react';
import { styled } from '@mui/material/styles';
import './Welcome.css'

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "#91C483",
    padding: theme.spacing(1),
    margin: theme.spacing(10),
    fontSize: 30,

}));

function Welcome() {
    return <Div className='thankyou'>{"Thank You"}</Div>
}

export default Welcome;

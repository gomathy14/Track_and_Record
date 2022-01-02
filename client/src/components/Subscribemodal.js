import React from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import '../App.css';

const Closebutton = styled(MdClose)`
     cursor:pointer;
     position:absolute;
     top:20px;
     right:20px;
     width:32px;
     height:32px;
     padding:0;
     z-index:10;
`;

export const Subscribemodal = ({subscribe,showsubscribe,initiative_id,token_id,message}) =>
{
    return(
        <>
        {subscribe ? 
        <div className='background'>
            <div className='subscribe-wrapper'>
                <div className='subscribe-content'>
                    <p>{message}</p>
                </div>
                    <Closebutton aria-label = 'Close details' onClick = {() => showsubscribe(prev=>!prev)}/>
            </div>
        </div>
         :null};
        </>
    )
}


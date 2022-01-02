import React from 'react';
import pic from './datapic1.jpg';
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

export const Modal = ({detail,showdetail,description,image}) =>
{
    return(
        <>
        {detail ? 
        <div className='background'>
            <div className='wrapper'>
                <div className='detailimg'>
                <img src={pic} width = "400px" height = "500px" alt = 'detail'/>
                </div>
                <div className='content'>
                    <h2>Explore more</h2>
                    <p>{description}</p>
                </div>
                    <Closebutton aria-label = 'Close details' onClick = {() => showdetail(prev=>!prev)}/>
            </div>
        </div>
         :null};
        </>
    )
}


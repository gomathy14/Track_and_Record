import  Axios  from 'axios';
import React, { useState } from 'react';
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

export const RespondModal = ({response , setresponse , log_id, employee_id, token_id,setstatus}) =>
{
    const [cheertext,setcheertext] = useState("");
    const addresponse = (e) =>
    {
        Axios.post('http://localhost:3001/addresponse',{log_id:log_id,employee_id:token_id,cheertext:cheertext}).
        then(
            response =>
            {
                console.log("Success");
            }
        )
        setstatus(true);
        closeresponse();
        
    }
    const closeresponse = () =>
    {
        setresponse(prev=>!prev);
    }
    return(
        <div id = {log_id}>
        {response ? 
        <div className='background'>
            <div className='response-wrapper'>
                <div className='response-content'>
                    <p>Give your Valuable Response</p>
                    <input className='response-text' type = 'text' value = {cheertext} 
                    onChange={(e) => setcheertext(e.target.value)}></input>
                    <button className='save-btn' onClick={addresponse}>Submit</button>
                </div>
                    <Closebutton aria-label = 'Close details' onClick = {() => setresponse(prev=>!prev)}/>
            </div>
        </div>
         :null};
        </div>
    )
}


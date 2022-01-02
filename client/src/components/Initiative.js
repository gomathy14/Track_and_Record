import React, { useState } from 'react';
import '../App.css';
import { Modal } from './Modal';
import {Subscribemodal} from './Subscribemodal';
import Axios from 'axios';

const Initiative = ({name , category , startdate,description,image, token_id,Initiative_id}) =>
{
    const [detail,showdetail] = useState(false);
    const opendetails = (e) =>
    {
        showdetail(prev => !prev);
    }
    const [subscribe,showsubscribe] = useState(false);
    const [message,setmessage] = useState("");
    const opensubscribe = (e) =>
    {
        getmessage();
        showsubscribe(prev => !prev);
    }
    const getmessage = () =>
    {
        Axios.post("http://localhost:3001/subscribe",{Employee_id:token_id,Initiative_id:Initiative_id}).
        then(response =>
       {
         console.log(response);
         if(response.data.message)
           setmessage(response.data.message);
         else
           setmessage("You have already subscribed");   
        console.log(message);
       })
    }
    return(
        <div className='card'>
            <div className='initiative-title'>
                <h1>{name}</h1>
            </div>
            <div className='initiative-category'>
                <p>Category : {category}</p>
            </div>
            <div className='initiative-startdate'>
            {startdate === 'TBA'? <p>To Be Announced</p> : <p>Commenced on {startdate}</p>}      
            </div>
            <div className='modal-btn'>
                <button onClick={opendetails}>Explore</button>
                <Modal detail= {detail} showdetail= {showdetail} 
                description = {description} image = {image}/>
                {startdate !== 'TBA'? 
                <button onClick={opensubscribe}>Subscribe</button> : null}
                <Subscribemodal subscribe= {subscribe} showsubscribe= {showsubscribe} 
                initiative_id = {Initiative_id} token_id = {token_id} message = {message}/>
            </div>
        </div>

    )
}

export default Initiative;
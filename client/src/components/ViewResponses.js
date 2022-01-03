import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewResponses = () =>
{
    const {id} = useParams();
    const [applaud,setapplauds] = useState([]);
    useEffect(() =>
    {
        Axios.post("http://localhost:3001/getapplauds",{id:id}).then(response =>
        {
            console.log(response);
            setapplauds(response.data);
        })
    },[])
    return(
        <>
        <h1>View responses from your peers for your contribution</h1>
        {applaud.length>0 ?
        <div>
            <ul className='resp-list'>
           {applaud.map(response => 
                 <li className='resp-item'>
                     <span></span>
                     <span>{response.Response}</span>
                     <span> - {response.Employee_name}</span>
                </li>
                 
             )}  
             </ul>  
        </div> : <h2>No Responses Yet</h2>}
        </>
    )
}

export default ViewResponses;
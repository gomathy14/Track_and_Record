import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import { SubscribedContext } from './SubscribedContext';

const ViewContribution = () =>
{
    const [logs,setlogs] = useState([]);
    const [Initiative,setInitiative] = useContext(SubscribedContext);
    const {id} = useParams();
    useEffect(() =>
    {
        loadlogs();
    },[])
    const filterInitiative = Initiative.filter(Initiative => Initiative.Subscribe_id === parseInt(id));
    const loadlogs = () =>
    {
       Axios.post("http://localhost:3001/getlogs",{id:id}).then(response =>
       {
           console.log(response);
           setlogs(response.data);
       })
    }
    
    return(
        <>
        <h1>{filterInitiative[0].Initiative_name}</h1>
        <div className='logs-container'>
        {logs.map(log => 
        <ul className='log-list'>
            <li className='log-item'>
                <span className='index'></span>
                <span className='task'>{log.Tasks}</span>
                <span className='hour'>{log.Hours} hours</span>
                <span><Link className='res-btn' to = {`/contribution/viewresponse/${log.Log_id}`}>Responses</Link></span>
            </li>
        </ul>
            )}
        </div>
        <button onClick = {(e) => window.location.href = '/contribution'} className='edit-button'>Back to Home</button>
        </>
    )
}

export default ViewContribution;
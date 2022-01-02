import  Axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import { SubscribedContext } from './SubscribedContext';


const Addcontribution = () =>
{
    const [task,settask] = useState('');
    const [hours,sethours]=useState(0);
    const [Initiative,setInitiative] = useContext(SubscribedContext);
    const {id} = useParams();
    const filterInitiative = Initiative.filter(Initiative => Initiative.Subscribe_id === parseInt(id));
    
    const addlog = (e)=>
    {
        Axios.post('http://localhost:3001/addlog',{task:task,hours:hours,id:id}).then(response =>
         {
                console.log(response);
                window.location.href = '/contribution'; 
            }
        )
 
    }
    return(
        <div className='input-card'>
            <h1>Add your Contribution</h1>
            <h2>{filterInitiative[0].Initiative_name}</h2>
            <div className = "form-group">
            <label>Tasks: </label>
            <input className='form-input-text' type = "text" onChange = {(e)=>{settask(e.target.value)}} value = {task}></input>
            </div>
            <div className="form-group">
            <label>No of Hours: </label>
            <input className='form-input-hours' type = "number" min = "1" onChange={(e)=>{sethours(e.target.value)}} value={hours}></input>
            </div>
            <div>
            <button onClick = {addlog} className='edit-button'>Save</button>&nbsp;
            <button onClick = {(e) => window.location.href = '/contribution'} className='edit-button'>Cancel</button>
            </div>
        </div>
    )
}

export default Addcontribution;
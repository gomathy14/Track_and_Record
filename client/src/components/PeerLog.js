import  Axios  from 'axios';
import React , {useEffect, useState} from 'react';
import { RespondModal } from './RespondModal';

const PeerLog = ({Log_id,Employee_id,Initiative_name,Employee_name,Tasks,Hours,token_id}) =>
{
    const [response,setresponse] = useState(false);
    const [status,setstatus] = useState(false);
    useEffect(() =>
    {
      getresponse(); 
    },[status])
    const getresponse = () =>
    {
        Axios.post("http://localhost:3001/getresponse",{Log_id:Log_id,Employee_id:token_id}).then(
            response =>
            {
                console.log(response);
                if(response.data.length === 0)
                   setstatus(true);
            }
        )
    };
     const openresponse = (e) =>
    {
        setresponse(prev => !prev);
    }
    return(
        <>
          <tr>
                  <td>{Initiative_name}</td>
                  <td>{Employee_name}</td>
                  <td>{Tasks}</td>
                  <td>{Hours}</td> 
                  <td>  
                    <button disabled = {!status} className='edit-button' onClick={openresponse}>Cheer</button> 
                  <RespondModal id = {Log_id} response={response} setresponse={setresponse} 
                  log_id = {Log_id} employee_id = {Employee_id} token_id = {token_id} 
                  setstatus = {setstatus}/>
                  </td>
                  </tr>
        </>
    )
}

export default PeerLog;
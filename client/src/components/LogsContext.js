import React, {useState , createContext, useEffect} from 'react';
import Axios from 'axios';

export const LogsContext = createContext();
export const LogsProvider = props =>
{
    const [logs,setlogs] = useState([]);
    useEffect(()=>{
    Axios.get("http://localhost:3001/alllogs").then(
        (response)=>
        {
            console.log(response);
            setlogs(response.data);
        }
    )
    },[])
    return(
        <LogsContext.Provider value = {[logs,setlogs]}>
            {props.children}
        </LogsContext.Provider>
    )
}
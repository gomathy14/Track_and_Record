import React, {useState , createContext, useEffect} from 'react';
import Axios from 'axios';

export const InitiativeContext = createContext();
export const InitiativeProvider = props =>
{
    const [initiative,setinitiative] = useState([]);
    useEffect(()=>{
    Axios.get("http://localhost:3001/initiatives").then(
        (response)=>
        {
            setinitiative(response.data);
        }
    )
    },[])
    return(
        <InitiativeContext.Provider value = {[initiative,setinitiative]}>
            {props.children}
        </InitiativeContext.Provider>
    )
}
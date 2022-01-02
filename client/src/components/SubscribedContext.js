import React, {useState , createContext, useEffect} from 'react';
import Axios from 'axios';

export const SubscribedContext = createContext();
export const SubscribedProvider = props =>
{
    const [subscribed,setsubscribed] = useState([]);
    const url = "http://localhost:3001/subscribed";
    useEffect(()=>{
        getsubscribe();
    },[])
    const getsubscribe = () =>
    {
        Axios.get("http://localhost:3001/subscribed").then(
            (response)=>
            {
                console.log(response);
                setsubscribed(response.data);
            }
        )
    };
    return(
        <SubscribedContext.Provider value = {[subscribed,setsubscribed]}>
            {props.children}
        </SubscribedContext.Provider>
    )
}
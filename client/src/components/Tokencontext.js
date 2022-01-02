import React, {useState , createContext, useEffect} from 'react';
import Axios from 'axios';

export const TokenContext = createContext();
export const TokenProvider = props =>
{
    const [token,settoken] = useState([]);
    useEffect(() =>
  {
    gettoken();
  },[])
  useEffect(() =>
  {
    savetoken();
  },[token])

  const gettoken = () =>
  {
    if(localStorage.getItem('token') === null){
        localStorage.setItem("token" , JSON.stringify([]));
     }else{
     const localcopy = JSON.parse(localStorage.getItem("token"));
     settoken(localcopy); 
     }
  }
  const savetoken = () =>
  {
    localStorage.setItem("token", JSON.stringify(token));
  }
    return(
        <TokenContext.Provider value = {[token,settoken]}>
            {props.children}
        </TokenContext.Provider>
    )
}
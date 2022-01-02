
import React, { useContext, useState } from 'react';
import { LogsContext } from './LogsContext';
import PeerLog  from './PeerLog';


const PeerContribution = ({token}) =>
{
     const [logs,setlogs] = useContext(LogsContext);
     return(
         <div className='container'>
             <h1>List of Peer Contribution</h1>
         <div className='py-4'>
          <table className = "table border shadow">
              <thead className='thead-dark'>
                  <tr>   
                  <th scope='col'>Initiative Name</th>
                  <th scope='col'>Employee Name</th>
                  <th scope = 'col'>Task</th>
                  <th scope = 'col'>Hours</th>
                  <th scope = 'col'>Action</th>
                  </tr>
              </thead>
              <tbody>
              {logs.map((log,key) => (log.Employee_id !== token.Employee_id ?
                  <PeerLog  Log_id = {log.Log_id} Employee_id = {log.Employee_id}  
                  Initiative_name = {log.Initiative_name} Employee_name = {log.Employee_name}
                  Tasks = {log.Tasks}  Hours = {log.Hours} token_id = {token.Employee_id}/>
              :null))}
              </tbody>
          </table>
          </div>
         </div>
     )
}

export default PeerContribution;
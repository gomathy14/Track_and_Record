
import React, { useContext, useState } from 'react';
import { LogsContext } from './LogsContext';
import PeerLog  from './PeerLog';
import ReactPaginate from 'react-paginate';


const PeerContribution = ({token}) =>
{
     const [logs,setlogs] = useContext(LogsContext);
     const filterlogs = logs.filter(log => log.Employee_id!==token.Employee_id);
     const [pagenumber,setpagenumber] = useState(0);
     const dataperpage = 3;
     const pagevisited = pagenumber*dataperpage;
     const displaylogs = filterlogs.slice(pagevisited,pagevisited+dataperpage).map(
        ((log,key) => 
            <PeerLog  Log_id = {log.Log_id} Employee_id = {log.Employee_id}  
            Initiative_name = {log.Initiative_name} Employee_name = {log.Employee_name}
            Tasks = {log.Tasks}  Hours = {log.Hours} token_id = {token.Employee_id}/>
         )
    );
    const pagecount = Math.ceil(filterlogs.length/dataperpage);
    const changepage = ({selected}) =>
    {
        setpagenumber(selected);
    }
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
              {displaylogs}
              </tbody>
          </table>
          <ReactPaginate
               previousLabel = {"Previous"}
               nextLabel= {"Next"}
               pageCount={pagecount}
               onPageChange= {changepage}
               containerClassName={"paginationBttns"}
               previousLinkClassName={"previousBttn"}
               nextLinkClassName={"nextBttn"}
               disabledClassName={"paginationDisabled"}
               activeClassName={"paginationActive"}
              />
          </div>
         </div>
     )
}

export default PeerContribution;
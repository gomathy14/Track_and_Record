
import React, { useContext, useState } from 'react';
import { SubscribedContext } from './SubscribedContext';
import {Link} from 'react-router-dom';


const Subscribedinitiatives = ({token}) =>
{
     const [Initiative,setinitiatives] = useContext(SubscribedContext);
     const [searchterm,setsearchterm] = useState("");
     const [sortorder,setsortorder] = useState("ASC");
     const sorting = (col) =>
     {
        if(sortorder === 'ASC')
        {
            const sorted = [...Initiative].sort((a,b) =>
               a[col].toLowerCase()>b[col].toLowerCase()?1:-1
            );
            setinitiatives(sorted);
            setsortorder("DESC");
            
        }
        else if(sortorder === 'DESC')
        {
            const sorted = [...Initiative].sort((a,b) =>
               a[col].toLowerCase()<b[col].toLowerCase()?1:-1
            );
            setinitiatives(sorted);
            setsortorder("ASC");
        }
     };
     return(
         <div className='container'>
             <h1>List of Subscribed Initiatives</h1>
             {Initiative.length !== 0 ? 
             <div>
             <input type = "text" 
             value = {searchterm} 
             placeholder='Search...' 
             className='form-control'
             onChange={(e) => {setsearchterm(e.target.value)}}></input>
         <div className='py-4'>
          <table className = "table border shadow">
              <thead className='thead-dark'>
                  <tr>   
                  <th scope='col' onClick={() => sorting("Initiative_name")}>Initiative Name</th>
                  <th scope='col' onClick={() => sorting("Initiative_category")}>Initiative Category</th>
                  <th scope = 'col'>Subscribed Date</th>
                  <th scope = 'col'>Contribution</th>
                  </tr>
              </thead>
              <tbody>
              {Initiative.filter(val => {
                  if(searchterm == "")
                    return val;
                  else if(
                      val.Initiative_name.toLowerCase().includes(searchterm.toLowerCase()) ||
                      val.Initiative_category.toLowerCase().includes(searchterm.toLowerCase())
                  )
                  {
                      return val;
                  }  
              }).map((Initiative,key) => (Initiative.Employee_id === token.Employee_id ?
                  <tr>
                  <td>{Initiative.Initiative_name}</td>
                  <td>{Initiative.Initiative_category}</td>
                  <td>{new Date(Initiative.Subscribe_date).toLocaleDateString()}</td>
                  <td><Link className='edit-button' to = {`/contribution/view/${Initiative.Subscribe_id}`}>View</Link> <Link className='edit-button' to = {`/contribution/add/${Initiative.Subscribe_id}`}>Add</Link></td>
                  </tr>
              :null))}
              </tbody>
          </table>
          </div> 
          </div> : <h2>Oops! You have not yet subscribed to any initiatives</h2> }
         </div>
     )
}

export default Subscribedinitiatives;
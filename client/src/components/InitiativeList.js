import React, { useState , useContext} from 'react';
import styled from 'styled-components';
import Initiative from './Initiative';
import { InitiativeContext } from './InitiativeContext.js';
import ReactPaginate from 'react-paginate';
import '../App.css';

function InitiativeList({token})
{
    const [initiative,setinitiative] = useContext(InitiativeContext);
    const [pagenumber,setpagenumber] = useState(0);
    const dataperpage = 2;
    const pagevisited = pagenumber*dataperpage;
    const displayinitiatives = initiative.slice(pagevisited,pagevisited+dataperpage).map(
        (initiative => <Initiative key = {initiative.Initiative_id} name = {initiative.Initiative_name}
            category = {initiative.Initiative_category} startdate = {initiative.Initiative_start} 
            description = {initiative.Initiative_desc} token_id = {token.Employee_id} 
            Initiative_id = {initiative.Initiative_id}/>)
    );
    const pagecount = Math.ceil(initiative.length/dataperpage);
    const changepage = ({selected}) =>
    {
        setpagenumber(selected);
    }
    return(
        <div>
            <h1>List of Initiatives</h1>
        <p>Lets dive in to the pool of initiatives taken to support various sectors</p>
        <div className='initiatives'>
           {displayinitiatives} 
        </div>
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
    )
}

export default InitiativeList;
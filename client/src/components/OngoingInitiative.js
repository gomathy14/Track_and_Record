import React from 'react';
import { useContext , useState } from 'react';
import Initiative from './Initiative';
import { InitiativeContext } from './InitiativeContext';
import ReactPaginate from 'react-paginate';
import '../App.css';

const OngoingInitiative = ({token}) =>
{
    const [initiatives,setinitiative] = useContext(InitiativeContext);
    //const [filterinitiative,setfilter] = useState([]);
    const filterinitiative = initiatives.filter(initiative=> initiative.Initiative_start !== 'TBA');
    const [pagenumber,setpagenumber] = useState(0);
    const dataperpage = 2;
    const pagevisited = pagenumber*dataperpage;
    const displayinitiatives = filterinitiative.slice(pagevisited,pagevisited+dataperpage).map(
        (initiative => <Initiative key = {initiative.Initiative_id} name = {initiative.Initiative_name}
            category = {initiative.Initiative_category} startdate = {initiative.Initiative_start} 
            description = {initiative.Initiative_desc} token_id = {token.Employee_id} 
            Initiative_id = {initiative.Initiative_id}/>)
    );
    const pagecount = Math.ceil(filterinitiative.length/dataperpage);
    const changepage = ({selected}) =>
    {
        setpagenumber(selected);
    }
    return(
        <div>
            <h1>List of Initiatives Ongoing</h1>
            <p>Lets get into the list of initiatives going on and lets try to contribute</p>
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

export default OngoingInitiative;
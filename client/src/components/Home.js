import React , {useContext}from 'react';
import { InitiativeContext } from './InitiativeContext';
import '../App.css';
import { SubscribedContext } from './SubscribedContext';



const Home = ({token}) =>
{
    const [initiative,setinitiative] = useContext(InitiativeContext);
    const [subscribed] = useContext(SubscribedContext);
    const ongoinginitiative = initiative.filter(initiative=> initiative.Initiative_start !== 'TBA');
    const upcominginitiative = initiative.filter(initiative=> initiative.Initiative_start === 'TBA');
    const myinitiatives = subscribed.filter(initiative => initiative.Employee_id === token.Employee_id);
    return(
        <div className='initiatives'>
            <div className='card'>
            <h1>Total Initiatives</h1>
            {initiative.length}
            </div>
            <div className='card'>
            <h1>Initiatives Ongoing</h1>
            {ongoinginitiative.length}
            </div>
            <div className='card'>
            <h1>Initiatives Upcoming</h1>
            {upcominginitiative.length}
            </div>
            <div className='card'>
            <h1>My Initiatives</h1>
            {myinitiatives.length}
            </div>
        </div>
    )
}
export default Home;
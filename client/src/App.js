
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { InitiativeProvider } from './components/InitiativeContext';
import InitiativeList from './components/InitiativeList';
import OngoingInitiative from './components/OngoingInitiative';
import UpcomingInitiative from './components/UpcomingInitiative';
import Home from './components/Home';
import { useState , useEffect, useContext } from 'react';
import Login from './components/Login';
import Subscribedinitiatives from './components/SubscribedInitiatives';
import { SubscribedProvider } from './components/SubscribedContext';
import Addcontribution from './components/Addcontribution';
import ViewContribution from './components/ViewContribution';
import { LogsProvider } from './components/LogsContext';
import PeerContribution from './components/PeerContribution';
import ViewResponses from './components/ViewResponses';

function App() {
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
  if(token.length===0)
    return <Login settoken= {settoken}/>
  return (
    /*<MovieProvider>
    <div className="App">
      <Router>
        <Sidebar/>
      </Router>
       <h1>Movie Watch list</h1>
       <AddMovie/>
       <Movielist/>   <h1>Initiatives List</h1>
      <div className='initiative'>
      <InitiativeList/>
      </div>
    </div>
    </MovieProvider>*/
    <InitiativeProvider>
      <SubscribedProvider>
        <LogsProvider>
    <div className="App">
      
      <Router>
        <Sidebar token = {token}/>
        <Routes>
          <Route path = "/" element= {<Home token = {token}/>}></Route>
         <Route path ="/initiatives"  element = {<InitiativeList token = {token}/>}/>
        <Route path="/initiatives/ongoing" exact element = {<OngoingInitiative token = {token}/>}></Route>
        <Route path = "/initiatives/upcoming" exact element= {<UpcomingInitiative/>}></Route>
        <Route path = "/contribution" exact element = {<Subscribedinitiatives token = {token}/>}></Route>
        <Route path = "/contribution/add/:id" exact element = {<Addcontribution/>}></Route>
        <Route path = "/contribution/view/:id" exact element = {<ViewContribution/>}></Route>
        <Route path = "/peercontribution" exact element = {<PeerContribution token = {token}/>}></Route>
        <Route path = "/contribution/viewresponse/:id" exact element = {<ViewResponses/>}></Route>
        </Routes>
      </Router>
    </div>
    </LogsProvider>
    </SubscribedProvider>
    </InitiativeProvider>
  );
}

export default App;

import React , {useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from 'react-icons/cg';
import {Link} from 'react-router-dom';
import {Sidebardata} from './Sidebardata';
import SubMenu from './SubMenu';
import Login from './Login';

const Nav = styled.div`
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    height: 80px;
    display:flex;
    justify-content : flex-start;
    align-items:center;
 `;

const NavIcon = styled(Link)`
      margin-left: 2rem;
      color: #e1e9fc;
      font-size : 1.5rem;
      height : 80px;
      display : flex;
      justify-content:flex-start;
      align-items:center;
`;

const Sidebarnav = styled.nav`
      background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
      width:220px;
      height:100vh;
      justify-content:center;
      position:fixed;
      top:0;
      left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
      transition:350ms;
      z-index: 10;
`;

const SidebarWrap = styled.div`
    width:100%
`;

const HeaderLabel = styled.span`
    margin-left:20px;
    color: #e1e9fc;
`;
const Headertext = styled.span`
    margin-left:10px;
    color: #e1e9fc;
`;

const HeaderIcon = styled.span`
    margin-left:900px;
    color: #e1e9fc;
    height : 80px;
    display : flex;
    justify-content:flex-start;
    align-items:center;
`;
const Logoutbutton = styled.button`
     margin-left:15px;
`;
const Sidebar = ({token}) =>
{
    const [sidebar,setsidebar] = useState(false);
    const showbar = () =>
    {
        setsidebar(!sidebar);
    }
    const logoutemployee = (e) =>
    {
        console.log("Removed");
        localStorage.removeItem("token");
        window.location.href = '/';
    }
    return(
        <>
         <Nav>
             <NavIcon to ="#">
                <FaIcons.FaBars onClick={showbar}/>
             </NavIcon>
             <HeaderLabel>Track and Record</HeaderLabel>
             <HeaderIcon><CgIcons.CgProfile/></HeaderIcon>
             <Headertext>{token.Employee_name}</Headertext>
             <Logoutbutton onClick={logoutemployee}>Logout</Logoutbutton>
         </Nav>
         <Sidebarnav sidebar = {sidebar}>
             <SidebarWrap>
             <NavIcon to ="#">
                <AiIcons.AiOutlineClose onClick={showbar}/>
             </NavIcon>
               {Sidebardata.map((item,index) =>  { return <SubMenu key = {index} item = {item}/> ; })}
             </SidebarWrap>
         </Sidebarnav>
        </>
    )
}

export default Sidebar;
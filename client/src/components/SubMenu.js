import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
  background: #252831;
  border-left: 4px solid #632ce4;
  cursor: pointer;
}
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropDownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({item}) =>
{
    const [submenu,setsubmenu] = useState(false);
    const showsubmenu = () => {
        setsubmenu(!submenu);
    }
    return(
        <>
          <SidebarLink to = {item.path} onClick = {item.subNav && showsubmenu}>
              <div>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
              </div>
              <div>
                 {item.subNav && submenu ? item.iconsOpened : item.subNav 
                   ? item.iconsClosed : null}
              </div>
          </SidebarLink>
          {submenu && item.subNav.map((items,index) => { 
              return(
              <DropDownLink to = {items.path} key = {index}>
                  {items.icon}
                  <SidebarLabel>{items.title}</SidebarLabel>
              </DropDownLink>)
          } )}
        </>
    )
}
export default SubMenu;
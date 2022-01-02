import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";


export const Sidebardata = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome/>
    },
    {
        title : 'Initiatives',
        path : '/initiatives',
        icon : <MdIcons.MdWorkspaces/>,
        iconsClosed : <RiIcons.RiArrowDownSFill/>,
        iconsOpened : <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title:"Ongoing",
                path : "/initiatives/ongoing",
                icon : <MdIcons.MdVolunteerActivism/>,
                cName : 'sub-nav'
            },
            {
                title:"Upcoming",
                path : "/initiatives/upcoming",
                icon : <MdIcons.MdOutlineVolunteerActivism/>,
                cName : 'sub-nav'
            }

        ]
    },
    {
        title : 'My Contribution',
        path : '/contribution',
        icon : <FaIcons.FaUserTag/>
    },
    {
        title : 'Peer Contribution',
        path : '/peercontribution',
        icon : <FaIcons.FaTasks/>   
    }
];
   


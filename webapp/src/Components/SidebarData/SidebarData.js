import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
//Sidebar item and paths to the options
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Manage Menu',
    path: '/manageMenu',
    icon: <IoIcons.IoIosPaper />,
    

  },
  {
    title: 'Manage Leftover',
    path: '/leftover',
    icon: <FaIcons.FaCartPlus />
  },
  
  {
    title: 'Orders',
    path: '/order',
    icon: <FaIcons.FaEnvelopeOpenText />,

    
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoIosLogOut />
    
  }
];
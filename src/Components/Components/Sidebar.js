import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import {MdProductionQuantityLimits} from 'react-icons/md'
import {LiaComments} from 'react-icons/lia'
import {FiUsers} from 'react-icons/fi'
import {BsBagCheck} from 'react-icons/bs'

function Sidebar() {
    const iconSize = '24px'
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">welcome to your dashboard</h1>
      <ul className="sidebar-links">
        <li>
          <AiOutlineHome size={iconSize} />
          <a href="#">HOME</a>
        </li>
        <li className="active">
            <MdProductionQuantityLimits size={iconSize}/>
          <a href="#">PRODUCTS</a>
        </li>
        <li>
            <LiaComments size={iconSize}/>
          <a href="#">COMMENTS</a>
        </li>
        <li>
            <FiUsers size={iconSize}/>
          <a href="#">USERS</a>
        </li>
        <li>
            <BsBagCheck size={iconSize}/>
          <a href="#">ORDERS</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

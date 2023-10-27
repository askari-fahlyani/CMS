import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">welcome to your dashboard</h1>
      <ul className="sidebar-links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li className="active">
          <a href="#">PRODUCTS</a>
        </li>
        <li>
          <a href="#">COMMENTS</a>
        </li>
        <li>
          <a href="#">USERS</a>
        </li>
        <li>
          <a href="#">ORDERS</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

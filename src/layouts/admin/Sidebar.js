import React, { useState } from "react";
import "../../assets/admin/css/sidebar.css";

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const sidebarItems = [
    { label: "Dashboard", iconClass: "bxs-dashboard" },
    { label: "My Store", iconClass: "bxs-shopping-bag-alt" },
    { label: "Analytics", iconClass: "bxs-doughnut-chart" },
    { label: "Analytics", iconClass: "bx bxs-group" },
    { label: "Analytics", iconClass: "bx bxs-message-dots" },
    // Add more items as needed
  ];
  return (
    <>
      <section id="sidebar" className={isOpen ? "" : "hide"}>
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          {sidebarItems.map((item, index) => (
            <li key={index} className={index === activeItem ? "active" : ""}>
              <a href="#" onClick={() => handleItemClick(index)}>
                <i className={`bx ${item.iconClass}`}></i>
                <span className="text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;

import '../styles/main.css';
import React from 'react';
import { FaFileContract, FaPaintBrush, FaInfoCircle, FaConciergeBell, FaFileSignature, FaSlidersH } from 'react-icons/fa';
import { MdDesignServices } from "react-icons/md";
import sidebarLogo from '../styles/sidebar-logo.jpg';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <div className="navbar">
      <div className="logo">
        <img src={sidebarLogo} className="logo-image" />
      </div>
        <ul>
          <li>
            <a onClick={() => setActiveTab('template')} className={activeTab === 'template' ? 'active' : ''}>
              <FaPaintBrush /> Template
            </a>
          </li>
          <li>
            <a onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'active' : ''}>
              <FaInfoCircle /> Details
            </a>
          </li>
          <li>
            <a onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'active' : ''}>
              <MdDesignServices /> Services
            </a>
          </li>
          <li>
            <a onClick={() => setActiveTab('terms')} className={activeTab === 'terms' ? 'active' : ''}>
              <FaFileSignature /> Terms
            </a>
          </li>
          <li>
            <a onClick={() => setActiveTab('customize')} className={activeTab === 'customize' ? 'active' : ''}>
              <FaSlidersH /> Customize
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

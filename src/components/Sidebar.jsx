import '../styles/main.css';
import React from 'react';
import { FaFileContract, FaPaintBrush, FaInfoCircle, FaConciergeBell, FaFileSignature, FaSlidersH } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <div className="navbar">
        <div className="logo">
          <FaFileContract style={{ color: '#f72585' }} />
          <span>ProposalMaker</span>
        </div>
        <ul>
          {/* Temporarily hidden Template tab */}
          {/*
          <li>
            <a onClick={() => setActiveTab('template')} className={activeTab === 'template' ? 'active' : ''}>
              <FaPaintBrush /> Template
            </a>
          </li>
          */}
          <li>
            <a onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'active' : ''}>
              <FaInfoCircle /> Details
            </a>
          </li>
          <li>
            <a onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'active' : ''}>
              <FaConciergeBell /> Services
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

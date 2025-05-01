import React from 'react';
import '../styles/main.css';

const Header = () => {
  return (
    <div className="header">
      <h2>Create New Proposal</h2>
      <div className="actions">
        <button className="btn btn-secondary"><i className="fas fa-save"></i> Save Draft</button>
        <button className="btn btn-success"><i className="fas fa-file-export"></i> Export PDF</button>
      </div>
    </div>
  );
};

export default Header;

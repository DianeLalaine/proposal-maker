import React from 'react';
import '../styles/main.css';

const Header = () => {
  return (
    <div className="header">
      <h2 className="poppins-bold-italic">Proposal Maker</h2>
      <div className="actions">
        <button className="btn btn-secondary"><i className="fas fa-save"></i> Save Draft</button>
        <button className="btn btn-success" onClick={() => window.dispatchEvent(new Event("export-pdf"))}>
          <i className="fas fa-file-export"></i> Export PDF
        </button>
      </div>
    </div>
  );
};

export default Header;

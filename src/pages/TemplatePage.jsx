import '../styles/main.css';
import React, { useState, useEffect } from 'react';

const TemplatePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('template-pdf');

  useEffect(() => {
    const proposal = document.getElementById('proposalPreview');
    if (proposal) {
      proposal.className = `proposal ${selectedTemplate}`;
    }
  }, [selectedTemplate]);

  return (
    <div className="section">
      <h3>Choose a Template</h3>
      <div className="template-options">
        {/* PDF-Styled Template */}
        <div
          className={`template-option ${selectedTemplate === 'template-pdf' ? 'active' : ''}`}
          onClick={() => setSelectedTemplate('template-pdf')}
        >
          <img src="/template-bg.png" alt="Styled Template" />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;

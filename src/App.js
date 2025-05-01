import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProposalPreview from './components/ProposalPreview';
import TemplatePage from './pages/TemplatePage';
import DetailsPage from './pages/DetailsPage';
import ServicesPage from './pages/ServicesPage';
import TermsPage from './pages/TermsPage';
import CustomizePage from './pages/CustomizePage';
import './styles/main.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('template');

  // === Global Details State (shared between form and preview) ===
  const [details, setDetails] = useState({
    refNumber: '',
    dateIssued: '',
    clientName: '',
    clientPosition: '',
    clientAddress: '',
    preparedByName: '',
    preparedByTitle: '',
    preparedByEmail: '',
    notedByName: '',
    notedByTitle: '',
    notedByEmail: ''
  });

  // === Conditional Tab Rendering ===
  const renderTab = () => {
    switch (activeTab) {
      case 'details': return <DetailsPage details={details} setDetails={setDetails} />;
      case 'services': return <ServicesPage />;
      case 'terms': return <TermsPage />;
      case 'customize': return <CustomizePage />;
      default: return <TemplatePage />;
    }
  };

  return (
    <div className="container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        <Header />
        <div className="main-content">
          <div className="editor">{renderTab()}</div>
          <ProposalPreview {...details} />
        </div>
      </div>
    </div>
  );
};

export default App;

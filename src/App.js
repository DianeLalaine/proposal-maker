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
    notedByEmail: '',
    typeOfSubscription: 'PRIISMS Online Subscription',
    specs: '',
    ratePerStudent: 0,
    otc: 0,
    vat: 0.12,
    multiCampus: 'No',
    reseller: 'No'
  });

  const [proposalText, setProposalText] = useState({
    salutation: "Dear Sir/Ma’am,",
    greeting: "Greetings!",

    body: `Prince Technologies Corporation is pleased to submit this commercial proposal for <strong>{typeOfSubscription}</strong>. 
It is a total management solution for educational and training institutions from kindergarten, grade school, junior high, senior high, college, and up to graduate school that has special features of online admission, enrollment, registration, and payment. 
Guaranteed 100% cloud-based and can be accessed anytime and anywhere using the web browser that helps you into managing your entire school processes from admission to graduation. 
PRIISMS ONLINE features a fully integrated, flexible and easy to use system developed with local innovation and global standards. Consider the benefits which can be measured in several ways:`,

    competitive: `<strong>I. COMPETITIVE PRICING</strong><br>
a) Our cost is the best in the industry given our product’s comprehensive features.`,

    integrated: `<strong>II. INTEGRATED AND INNOVATIVE SOLUTIONS</strong><br>
a) We provide a complete and easy-to-use management platform. Our system can adapt to changes and can be enhanced to maximize your institution’s operational requirements.<br>
b) We deliver fast deployment and data migration.`,

    reliable: `<strong>III. RELIABLE SOFTWARE SOLUTIONS AND AFTER SALES SERVICE</strong><br>
a) Our company is in the forefront of continuous development and upgrade of the system to ensure that you are always in line with technology advancement and innovation. Lastly,<br>
b) We have a powerful support system, working with our professionally trained and experienced team.`,

    closing: `Our company’s track record is proven in the industry and we look forward to serve you with your requirement. Kindly call our hotline numbers or send us an email on the below contact details for further information.`,

    closingSalutation: "Yours Sincerely,",
    footnote: "system generated – no need for signature",

    terms: {
      subscription: {
        paymentTerms: `<strong>II. TERMS OF PAYMENT</strong><br>
SOFTWARE AS A SERVICE (SaaS)<br>
1. Pay the initial payment (One Time Cost/s)<br>
2. Payment of Subscription Fee (Actual number of enrolled students)<br>
3. Billing and payment Monthly`,

        delivery: `<strong>III. DELIVERY</strong><br>
30 TO 60 DAYS upon sign up of this agreement and proof of payment of Total Initial Payment.`,

        warranty: `<strong>IV. WARRANTY</strong><br>
1. Three (3) years lock in period with Automatic Renewal contract for SaaS (Subscription)<br>
2. Standard Service Warranty and After Sales Support within the contract term.<br>
3. Lifetime warranty on bugs and fixes after installation of software components<br>
4. 99.9% uptime on cloud services`,

        validity: `<strong>V. PRICE AND VALIDITY</strong><br>
1. Prices are in Philippine currency and VAT Exclusive<br>
2. This offer is valid for 30 calendar days from the date of issuance.`
      },
      licensed: {
        delivery: `<strong>II. DELIVERY</strong><br>
30 TO 60 DAYS upon sign up of this agreement and proof of payment of Total Initial Payment.`,

        warranty: `<strong>III. WARRANTY</strong><br>
1. One (1) Year on system and support service, a separate Service Maintenance Agreement can be valid after the contract term for Perpetual Software License (Purchase)<br>
2. Lifetime warranty on bugs and fixes after installation of software components<br>
3. 99.9% uptime on cloud services`,

        validity: `<strong>IV. PRICE AND VALIDITY</strong><br>
1. Prices are in Philippine currency and VAT Exclusive<br>
2. This offer is valid for 30 calendar days from the date of issuance.`
      }
    }
  });

  const renderTab = () => {
    switch (activeTab) {
      case 'details':
        return <DetailsPage details={details} setDetails={setDetails} />;
      case 'services':
        return <ServicesPage details={details} setDetails={setDetails} />;
      case 'terms':
        return (
          <TermsPage
            proposalText={proposalText}
            setProposalText={setProposalText}
            typeOfSubscription={details.typeOfSubscription}
          />
        );
      case 'customize':
        return <CustomizePage />;
      default:
        return <TemplatePage />;
    }
  };

  return (
    <div className="container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        <Header />
        <div className="main-content">
          <div className="editor">{renderTab()}</div>
          <ProposalPreview {...details} proposalText={proposalText} />
        </div>
      </div>
    </div>
  );
};

export default App;

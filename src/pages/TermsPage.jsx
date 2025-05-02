import React from 'react';
import '../styles/TermsPage.css';

const TermsPage = ({ proposalText, setProposalText, typeOfSubscription }) => {
  const isSubscription = typeOfSubscription === 'PRIISMS Online Subscription';
  const currentTermsKey = isSubscription ? 'subscription' : 'licensed';
  const currentTerms = proposalText.terms?.[currentTermsKey] || {};

  const handleChange = (key, value) => {
    setProposalText(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleTermsChange = (key, value) => {
    setProposalText(prev => ({
      ...prev,
      terms: {
        ...prev.terms,
        [currentTermsKey]: {
          ...prev.terms?.[currentTermsKey],
          [key]: value
        }
      }
    }));
  };

  return (
    <div className="terms-container">
      <h2 className="page-heading">PAGE 1 - Content</h2>
      <div className="section">
        <label><strong>Salutation</strong></label>
        <textarea className="form-control" rows="2" value={proposalText.salutation} onChange={e => handleChange('salutation', e.target.value)} />

        <label><strong>Greeting</strong></label>
        <textarea className="form-control" rows="2" value={proposalText.greeting} onChange={e => handleChange('greeting', e.target.value)} />

        <label><strong>Body</strong></label>
        <textarea className="form-control" rows="6" value={proposalText.body} onChange={e => handleChange('body', e.target.value)} />

        <label><strong>Competitive Pricing</strong></label>
        <textarea className="form-control" rows="3" value={proposalText.competitive} onChange={e => handleChange('competitive', e.target.value)} />

        <label><strong>Integrated and Innovated Solutions</strong></label>
        <textarea className="form-control" rows="3" value={proposalText.integrated} onChange={e => handleChange('integrated', e.target.value)} />

        <label><strong>Reliability and Support</strong></label>
        <textarea className="form-control" rows="3" value={proposalText.reliable} onChange={e => handleChange('reliable', e.target.value)} />
      </div>

      <h2 className="page-heading">PAGE 2 – Signatories</h2>
      <div className="section">
        <label><strong>Closing Message</strong></label>
        <textarea className="form-control" rows="3" value={proposalText.closing} onChange={e => handleChange('closing', e.target.value)} />

        <label><strong>Closing Salutation</strong></label>
        <textarea className="form-control" rows="1" value={proposalText.closingSalutation} onChange={e => handleChange('closingSalutation', e.target.value)} />

        <label><strong>Footnote</strong></label>
        <textarea className="form-control" rows="1" value={proposalText.footnote} onChange={e => handleChange('footnote', e.target.value)} />
      </div>

      <h2 className="page-heading">PAGE 3 – Terms & Conditions</h2>
      <div className="section">
        {isSubscription && (
          <>
            <label><strong>Payment Terms</strong></label>
            <textarea
              className="form-control"
              rows="4"
              value={currentTerms.paymentTerms || ''}
              onChange={e => handleTermsChange('paymentTerms', e.target.value)}
            />
          </>
        )}

        <label><strong>Delivery</strong></label>
        <textarea
          className="form-control"
          rows="3"
          value={currentTerms.delivery || ''}
          onChange={e => handleTermsChange('delivery', e.target.value)}
        />

        <label><strong>Warranty</strong></label>
        <textarea
          className="form-control"
          rows="4"
          value={currentTerms.warranty || ''}
          onChange={e => handleTermsChange('warranty', e.target.value)}
        />

        <label><strong>Price and Validity</strong></label>
        <textarea
          className="form-control"
          rows="3"
          value={currentTerms.validity || ''}
          onChange={e => handleTermsChange('validity', e.target.value)}
        />
      </div>
    </div>
  );
};

export default TermsPage;

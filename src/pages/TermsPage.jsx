import React from 'react';
import '../styles/main.css';
const TermsPage = () => {
  return (
    <>
      <div className="section">
        <h3>Payment Terms</h3>
        <textarea className="form-control" rows="3" placeholder="Payment Schedule..."></textarea>
      </div>

      <div className="section">
        <h3>Terms & Conditions</h3>
        <textarea className="form-control" rows="6" placeholder="Terms and conditions..."></textarea>
      </div>
    </>
  );
};

export default TermsPage;

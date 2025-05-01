import React from 'react';
import '../styles/ProposalPreview.css';

const ProposalPreview = ({
  refNumber,
  dateIssued,
  clientName,
  clientPosition,
  clientAddress,
  preparedByName,
  preparedByTitle,
  preparedByEmail,
  notedByName,
  notedByTitle,
  notedByEmail,
  typeOfSubscription = "PRIISMS Online Subscription"
}) => {
  return (
    <div className="preview">
      <div className="preview-content">
        <div className="proposal-wrapper">
          
          {/* === PAGE 1 === */}
          <div className="proposal-a4 page-break">
            <div className="background-image"></div>
            <div className="page-content">

              {/* Top Row: Date & Ref */}
              <div className="top-row">
                <div className="date">{dateIssued}</div>
                <div className="ref-number"><strong>Reference Number: {refNumber}</strong></div>
              </div>

              {/* Client Info */}
              <div className="client-info">
                <p><strong>{clientName}</strong></p>
                <p>{clientPosition}</p>
                <p>{clientAddress}</p>
              </div>

              {/* Justified Body Content */}
              <div className="body-content">
                <p>Dear Sir/Ma’am,</p>
                <p>Greetings!</p>

                <p>
                  Prince Technologies Corporation is pleased to submit this commercial proposal for <strong>{typeOfSubscription}</strong>. It is a total management solution for educational and training institutions from kindergarten, grade school, junior high, senior high, college, and up to graduate school that has special features of online admission, enrollment, registration, and payment. Guaranteed 100% cloud-based and can be accessed anytime and anywhere using the web browser that helps you into managing your entire school processes from admission to graduation. PRIISMS ONLINE features a fully integrated, flexible and easy to use system developed with local innovation and global standards. Consider the benefits which can be measured in several ways:
                </p>

                <p><strong>I. COMPETITIVE PRICING</strong><br />
                a) Our cost is the best in the industry given our product’s comprehensive features.</p>

                <p><strong>II. INTEGRATED AND INNOVATIVE SOLUTIONS</strong><br />
                a) We provide a complete and easy-to-use management platform. Our system can adapt to changes and can be enhanced to maximize your institution’s operational requirements.<br />
                b) We deliver fast deployment and data migration.</p>

                <p><strong>III. RELIABLE SOFTWARE SOLUTIONS AND AFTER SALES SERVICE</strong><br />
                a) Our company is in the forefront of continuous development and upgrade of the system, to ensure that you are always in line with technology advancement and innovation.<br />
                b) We have a powerful support system, working with our professionally trained and experienced.</p>
              </div>
            </div>
          </div>

 {/* === PAGE 2 === */}
<div className="proposal-a4 page-break">
  <div className="background-image"></div>
  <div className="page-content">
    <div className="body-content">
      <p style={{ marginTop: '40px' }}>
        Our company’s track record is proven in the industry and we look forward to serve you with your requirement. Kindly call our hotline numbers or send us an email on the below contact details for further information.
      </p>

      <p style={{ marginTop: '50px' }}><strong>Yours Sincerely,</strong></p>

      <div style={{ marginBottom: '40px' }}>
        <p><strong>Prepared By:</strong></p>
        <p>{preparedByName}<br />{preparedByTitle}<br />{preparedByEmail}</p>
      </div>

      <div style={{ marginBottom: '100px' }}>
        <p><strong>Noted By:</strong></p>
        <p>{notedByName}<br />{notedByTitle}<br />{notedByEmail}</p>
      </div>

      <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
        system generated – no need for signature
      </p>
    </div>
  </div>
</div>


          {/* === PAGE 3 === */}
          <div className="proposal-a4">
            <div className="background-image"></div>
            <div className="page-content">
              <h3>I. COSTING</h3>
              <p><strong>PRIISMS Online Subscription:</strong> ₱232.41 / student</p>
              <p><strong>One-time setup cost:</strong> ₱350,000 + 12% VAT = ₱448,000.00</p>

              <h3>III. TERMS OF PAYMENT</h3>
              <ul>
                <li>Initial payment of one-time cost</li>
                <li>Monthly billing based on enrolled students</li>
              </ul>

              <h3>IV. DELIVERY</h3>
              <p>30–60 days from sign-up and payment confirmation</p>

              <h3>V. WARRANTY</h3>
              <ul>
                <li>3-year lock-in period with automatic renewal</li>
                <li>Lifetime bug fixes and software updates</li>
                <li>99.9% guaranteed cloud uptime</li>
              </ul>

              <h3>VI. PRICE VALIDITY</h3>
              <ul>
                <li>All prices in PHP and VAT-exclusive</li>
                <li>Offer valid for 30 calendar days from issuance</li>
              </ul>

              <p style={{ marginTop: '40px' }}>
                ________________________________<br />
                Authorized Signature
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProposalPreview;

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
  typeOfSubscription = "PRIISMS Online Subscription",
  specs = '',
  ratePerStudent = 0,
  otc = 0,
  vat = 0.12,
}) => {
  const totalCost = otc + otc * vat;

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
              <table className="costing-table">
                <thead>
                  <tr>
                    <th colSpan="2">{typeOfSubscription}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>SERVER SPECS</strong></td>
                    <td><strong>RATE PER STUDENT</strong></td>
                  </tr>
                  <tr>
                    <td>{specs}</td>
                    <td>₱{ratePerStudent.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td><strong>ONE TIME COST</strong></td>
                    <td>₱{otc.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  </tr>
                  <tr>
                    <td><strong>VAT</strong></td>
                    <td>{(vat * 100).toFixed(0)}%</td>
                  </tr>
                  <tr>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>₱{totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></td>
                  </tr>
                </tbody>
              </table>

              <p className="note">Note: Customizable in accordance to school policy & preference.</p>

              <h3>II. TERMS OF PAYMENT</h3>
              <p>SOFTWARE AS A SERVICE (SUBSCRIPTION)</p>
              <ul>
                <li>Pay the initial payment (One Time Cost/s)</li>
                <li>Payment of Subscription Fee (Actual number of enrolled students)</li>
                <li>Billing and payment Monthly</li>
              </ul>

              <h3>III. DELIVERY</h3>
              <p>30 TO 60 DAYS upon sign up of this agreement and proof of payment of Total Initial Payment.</p>

              <h3>IV. WARRANTY</h3>
              <ul>
                <li>Three (3) years lock in period with Automatic Renewal contract for SaaS (Subscription)</li>
                <li>Standard Service Warranty and After Sales Support within the contract term.</li>
                <li>Lifetime warranty on bugs and fixes after installation of software components</li>
                <li>99.9% uptime on cloud services</li>
              </ul>

              <h3>V. PRICE AND VALIDITY</h3>
              <ul>
                <li>Prices are in Philippine currency and VAT Exclusive</li>
                <li>This offer is valid for 30 calendar days from the date of issuance.</li>
              </ul>

              <p style={{ marginTop: '40px' }}>
                Please sign on the space provided below to indicate your concurrence to the foregoing.
              </p>
              <p>
                ________________________________<br />
                Authorized Signature
              </p>
              <p>
                ________________________________<br />
                Date Signed
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProposalPreview;

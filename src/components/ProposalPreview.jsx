import React from 'react';
import '../styles/ProposalPreview.css';

const ProposalPreview = (props) => {
  const {
    refNumber = '',
    dateIssued = '',
    clientName = '',
    clientPosition = '',
    clientAddress = '',
    preparedByName = '',
    preparedByTitle = '',
    preparedByEmail = '',
    notedByName = '',
    notedByTitle = '',
    notedByEmail = '',
    typeOfSubscription = '',
    specs = '',
    ratePerStudent = 0,
    otc = 0,
    vat = 0.12,
    proposalText = {}
  } = props;

  const totalCost = otc + otc * vat;
  const formattedBody = proposalText.body?.replace('{typeOfSubscription}', typeOfSubscription) || '';
  const isLicensed = typeOfSubscription.toLowerCase().includes('license');
  const termsData = isLicensed ? proposalText.terms?.licensed : proposalText.terms?.subscription;

  return (
    <div className="preview">
      <div className="preview-content">
        <div className="proposal-wrapper">

          {/* PAGE 1 */}
          <div className="proposal-a4 page-break">
            <div className="background-image"></div>
            <div className="page-content">
              <div className="top-row">
                <div className="date">{dateIssued}</div>
                <div className="ref-number"><strong>Reference Number: {refNumber}</strong></div>
              </div>

              <div className="client-info">
                <p><strong>{clientName}</strong></p>
                <p>{clientPosition}</p>
                <p>{clientAddress}</p>
              </div>

              <div className="body-content">
                <p dangerouslySetInnerHTML={{ __html: proposalText.salutation || '' }}></p>
                <p dangerouslySetInnerHTML={{ __html: proposalText.greeting || '' }}></p>
                <p dangerouslySetInnerHTML={{ __html: formattedBody }}></p>
                <p dangerouslySetInnerHTML={{ __html: proposalText.competitive || '' }}></p>
                <p dangerouslySetInnerHTML={{ __html: proposalText.integrated || '' }}></p>
                <p dangerouslySetInnerHTML={{ __html: proposalText.reliable || '' }}></p>
              </div>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className="proposal-a4 page-break">
            <div className="background-image"></div>
            <div className="page-content">
              <div className="body-content">
                <p style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: proposalText.closing || '' }}></p>
                <p style={{ marginTop: '50px' }} dangerouslySetInnerHTML={{ __html: `<strong>${proposalText.closingSalutation || ''}</strong>` }}></p>

                <div style={{ marginBottom: '40px' }}>
                  <p><strong>Prepared By:</strong></p>
                  <p>{preparedByName}<br />{preparedByTitle}<br />{preparedByEmail}</p>
                </div>

                <div style={{ marginBottom: '100px' }}>
                  <p><strong>Noted By:</strong></p>
                  <p>{notedByName}<br />{notedByTitle}<br />{notedByEmail}</p>
                </div>

                <p style={{ fontWeight: 'bold', fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: proposalText.footnote || '' }}></p>
              </div>
            </div>
          </div>

          {/* PAGE 3 */}
          <div className="proposal-a4">
            <div className="background-image"></div>
            <div className="page-content">
              <div className="body-content">
                <p><strong>I. COSTING</strong></p>
                <table className="costing-table full-layout">
                  <thead>
                    <tr>
                      <th colSpan="2" className="subscription-title">{typeOfSubscription}</th>
                    </tr>
                    <tr>
                      <th>SERVER SPECS</th>
                      <th>RATE PER STUDENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{specs}</td>
                      <td>₱{ratePerStudent.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    </tr>
                    <tr>
                      <td><strong>{isLicensed ? 'LICENSE COST' : 'ONE TIME COST'}</strong></td>
                      <td>₱{otc.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    </tr>
                    <tr>
                      <td><strong>VAT</strong></td>
                      <td>{(vat * 100).toFixed(0)}%</td>
                    </tr>
                    <tr>
                      <td><strong>TOTAL LOT PRICE</strong></td>
                      <td><strong>₱{totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="note-row">
                        Note: Customizable in accordance to school policy & preference.
                      </td>
                    </tr>
                  </tbody>
                </table>

                {!isLicensed && (
                  <p dangerouslySetInnerHTML={{ __html: termsData?.paymentTerms || '' }}></p>
                )}
                <p dangerouslySetInnerHTML={{ __html: termsData?.delivery || '' }}></p>
                <p dangerouslySetInnerHTML={{ __html: termsData?.warranty || '' }}></p>
                <p dangerouslySetInnerHTML={{ __html: termsData?.validity || '' }}></p>

                <div className="signature-row">
                  <div>
                    ________________________________<br />
                    Authorized Signature
                  </div>
                  <div>
                    ________________________________<br />
                    Date Signed
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProposalPreview;

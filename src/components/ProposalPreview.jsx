import React, { useEffect, useRef, useState } from 'react';
import '../styles/ProposalPreview.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useFont } from '../context/FontContext';

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
    studentCount = 0,
    otc = 0,
    vat = 0.12,
    proposalText = {}
  } = props;

  const { headingFont, contentFont } = useFont();
  const [isExporting, setIsExporting] = useState(false);
  const wrapperRef = useRef(null);

  const isLicensed = typeOfSubscription.toLowerCase().includes('license');
  const calculatedTotal = isLicensed
    ? otc + otc * vat
    : otc + (ratePerStudent * studentCount) + vat * (otc + ratePerStudent * studentCount);

  const formattedBody = proposalText.body?.replace('{typeOfSubscription}', typeOfSubscription) || '';
  const termsData = isLicensed ? proposalText.terms?.licensed : proposalText.terms?.subscription;

  const exportToPDF = async () => {
    setIsExporting(true);
    setTimeout(async () => {
      const pages = document.querySelectorAll('.proposal-a4');
      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
      const pdfWidth = 210;
      const maxPdfHeight = 297;

      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], {
          scale: 2,
          useCORS: true,
          scrollY: -window.scrollY
        });

        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
        const pageHeight = Math.min(imgHeight, maxPdfHeight);

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pageHeight);
      }

      pdf.save('proposal.pdf');
      setIsExporting(false);
    }, 100);
  };

  useEffect(() => {
    const handleExport = () => exportToPDF();
    window.addEventListener('export-pdf', handleExport);
    return () => window.removeEventListener('export-pdf', handleExport);
  }, []);

  return (
    <div className={`preview ${isExporting ? 'export-mode' : ''}`} id="proposal-preview">
      <div className="preview-content">
        <div
          className={`proposal-wrapper ${!isExporting ? 'scaled-preview' : ''}`}
          style={{ fontFamily: contentFont }}
          ref={wrapperRef}
        >
          {/* PAGE 1 */}
          <div className="proposal-a4">
            <div className="background-image"></div>
            <div className="page-content">
              <div className="top-row" style={{ fontFamily: headingFont }}>
                <div className="date">{dateIssued}</div>
                <div className="ref-number"><strong>Reference Number: {refNumber}</strong></div>
              </div>
              <div className="client-info">
                <p><strong>{clientName}</strong></p>
                <p>{clientPosition}</p>
                <p>{clientAddress}</p>
              </div>
              <div className="body-content">
                <p dangerouslySetInnerHTML={{ __html: proposalText.salutation || '' }} />
                <p dangerouslySetInnerHTML={{ __html: proposalText.greeting || '' }} />
                <p dangerouslySetInnerHTML={{ __html: formattedBody }} />
                <p dangerouslySetInnerHTML={{ __html: proposalText.competitive || '' }} />
                <p dangerouslySetInnerHTML={{ __html: proposalText.integrated || '' }} />
                <p dangerouslySetInnerHTML={{ __html: proposalText.reliable || '' }} />
              </div>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className="proposal-a4">
            <div className="background-image"></div>
            <div className="page-content">
              <div className="body-content">
                <p style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: proposalText.closing || '' }} />
                <p style={{ marginTop: '50px' }} dangerouslySetInnerHTML={{ __html: `<strong>${proposalText.closingSalutation || ''}</strong>` }} />
                <div style={{ marginBottom: '40px' }}>
                  <p><strong>Prepared By:</strong></p>
                  <p>{preparedByName}<br />{preparedByTitle}<br />{preparedByEmail}</p>
                </div>
                <div style={{ marginBottom: '100px' }}>
                  <p><strong>Noted By:</strong></p>
                  <p>{notedByName}<br />{notedByTitle}<br />{notedByEmail}</p>
                </div>
                <p style={{ fontWeight: 'bold', fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: proposalText.footnote || '' }} />
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
                      <td>
                        {isLicensed
                          ? 'N/A'
                          : `₱${ratePerStudent.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                      </td>
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
                      <td><strong>₱{calculatedTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="note-row">
                        Note: Customizable in accordance to school policy & preference.
                      </td>
                    </tr>
                  </tbody>
                </table>
                {!isLicensed && (
                  <p dangerouslySetInnerHTML={{ __html: termsData?.paymentTerms || '' }} />
                )}
                <p dangerouslySetInnerHTML={{ __html: termsData?.delivery || '' }} />
                <p dangerouslySetInnerHTML={{ __html: termsData?.warranty || '' }} />
                <p dangerouslySetInnerHTML={{ __html: termsData?.validity || '' }} />
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

import React, { useState, useEffect } from 'react';
import '../styles/ServicesPage.css';

const pricingData = {
  Subscription: {
    1000: { specs: 'UP TO 1,000 PAX T2 Server Large\n2 Cores 4GB RAM, SSD Storage\nUp to 3.3 GHz Intel Xeon Scalable processor...', rate: 162.41, otc: 350000 },
    4000: { specs: 'UP TO 4,000 PAX T2 Server 2x Large\n8 Cores 16GB RAM...', rate: 51.26, otc: 350000 },
    7000: { specs: 'UP TO 7,000 PAX C4 Server 4x Large\n16 Cores, 30GB RAM...', rate: 37.23, otc: 350000 },
    15000: { specs: 'UP TO 15K PAX M5a Server 8x Large\n36 Cores, 60GB RAM...', rate: 25.30, otc: 350000 },
    30000: { specs: 'UP TO 30K PAX M5a Server 12x Large\n48 Cores, 192GB RAM...', rate: 15.89, otc: 350000 },
    60000: { specs: 'UP TO 60K PAX M5a Server 16x Large\n64 Cores, 256GB RAM...', rate: 9.91, otc: 350000 }
  },
  Licensed: {
    1000: { specs: 'UP TO 1,000 PAX T2 Server Large\n2 Cores 4GB RAM...', perpetualPrice: 1948946.64 },
    4000: { specs: 'UP TO 4,000 PAX T2 Server 2x Large\n8 Cores 16GB RAM...', perpetualPrice: 1778400.00 },
    7000: { specs: 'UP TO 7,000 PAX C4 Server 4x Large\n16 Cores, 30GB RAM...', perpetualPrice: 2452993.92 },
    15000: { specs: 'UP TO 15K PAX M5a Server 8x Large\n36 Cores, 60GB RAM...', perpetualPrice: 3205587.84 },
    30000: { specs: 'UP TO 30K PAX M5a Server 12x Large\n48 Cores, 192GB RAM...', perpetualPrice: 5719134.72 },
    60000: { specs: 'UP TO 60K PAX M5a Server 16x Large\n64 Cores, 256GB RAM...', perpetualPrice: 7136712.96 }
  }
};

const ServicesPage = ({ details, setDetails }) => {
  const [type, setType] = useState('Subscription');
  const [population, setPopulation] = useState(1000);
  const [multiCampus, setMultiCampus] = useState('No');
  const [reseller, setReseller] = useState('No');

  useEffect(() => {
    const selected = pricingData[type][population];
    setDetails(prev => ({
      ...prev,
      typeOfSubscription: type === 'Subscription' ? 'PRIISMS Online Subscription' : 'PRIISMS PERPETUAL LICENSE',
      specs: selected.specs,
      ratePerStudent: selected.rate || 0,
      otc: selected.otc || 0,
      vat: 0.12,
      multiCampus,
      reseller
    }));
  }, [type, population, multiCampus, reseller]);

  return (
    <div className="details-container">
      <div className="section">
        <h3>Service Configuration</h3>
        <div className="form-row">
          <div className="form-col">
            <label>Type</label>
            <select className="form-control" value={type} onChange={(e) => setType(e.target.value)}>
              <option>Subscription</option>
              <option>Licensed</option>
            </select>
          </div>
          <div className="form-col">
            <label>Population</label>
            <select className="form-control" value={population} onChange={(e) => setPopulation(Number(e.target.value))}>
              {[1000, 4000, 7000, 15000, 30000, 60000].map(pop => (
                <option key={pop} value={pop}>{pop.toLocaleString()}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label>Multiple Campus?</label>
            <select className="form-control" value={multiCampus} onChange={(e) => setMultiCampus(e.target.value)}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div className="form-col">
            <label>Reseller?</label>
            <select className="form-control" value={reseller} onChange={(e) => setReseller(e.target.value)}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>
      </div>

      <div className="section">
        <h4>{type} Pricing</h4>
        <p><strong>Specs:</strong></p>
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>{details.specs}</pre>
        {type === 'Subscription' ? (
          <>
            <p><strong>Rate Per Student:</strong> ₱{details.ratePerStudent.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            <p><strong>One-Time Cost (OTC):</strong> ₱{details.otc.toLocaleString()}</p>
          </>
        ) : (
          <p><strong>Perpetual License Cost:</strong> ₱{pricingData[type][population].perpetualPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        )}
        <p><strong>Multiple Campus?</strong> {multiCampus}</p>
        <p><strong>Reseller?</strong> {reseller}</p>
      </div>
    </div>
  );
};

export default ServicesPage;

import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const pricingData = {
  Subscription: {
    1000: {
      specs: `UP TO 1,000 PAX T2 Server Large
2 Cores 4GB RAM, SSD Storage
Up to 3.3 GHz Intel Xeon Scalable processor (Haswell E5-2676 v3 or Broadwell E5-2686 v4)
High frequency Intel Xeon processors
24/7 support/server monitoring`,
      rate: 162.41,
      otc: 350000,
    },
    4000: {
      specs: `UP TO 4,000 PAX T2 Server 2x Large
8 Cores 16GB RAM, SSD Storage
Up to 3.3 GHz Intel Xeon Scalable processor
High frequency Intel Xeon processors
24/7 support/server monitoring`,
      rate: 51.26,
      otc: 350000,
    },
    7000: {
      specs: `UP TO 7,000 PAX C4 Server 4x Large
16 Cores, 30GB RAM, SSD Storage
2.9 GHz Intel Xeon E5-2666 v3
Intel AVX+, AVX2+, Intel Turbo EBS Optimized
10 Gbps Network, 24/7 support/server monitoring`,
      rate: 37.23,
      otc: 350000,
    },
    15000: {
      specs: `UP TO 15K PAX M5a Server 8x Large
36 Cores, 60GB RAM, SSD Storage
2.9 GHz Intel Xeon E5-2666 v3
Intel AVX+, AVX2+, Intel Turbo EBS Optimized
10 Gbps Network, 24/7 support/server monitoring`,
      rate: 25.30,
      otc: 350000,
    },
    30000: {
      specs: `UP TO 30K PAX M5a Server 12x Large
48 Cores, 192GB RAM, SSD Storage
2.9 GHz Intel Xeon E5-2666 v3
Intel AVX+, AVX2+, Intel Turbo EBS Optimized
10 Gbps Network, 24/7 support/server monitoring`,
      rate: 15.89,
      otc: 350000,
    },
    60000: {
      specs: `UP TO 60K PAX M5a Server 16x Large
64 Cores, 256GB RAM, SSD Storage
2.4 GHz Intel Xeon Scalable Processor (Broadwell E5-2686 v4 or Haswell E5-2676 v3)
EBS-Optimized, 24/7 support/server monitoring`,
      rate: 9.91,
      otc: 350000,
    },
  },
  Licensed: {
    1000: {
      specs: `UP TO 1,000 PAX T2 Server Large
2 Cores 4GB RAM, SSD Storage
Up to 3.3 GHz Intel Xeon Scalable processor (Haswell E5-2676 v3 or Broadwell E5-2686 v4)
High frequency Intel Xeon processors
24/7 support/server monitoring`,
      perpetualPrice: 1948946.64,
    },
    4000: {
      specs: `UP TO 4,000 PAX T2 Server 2x Large
8 Cores 16GB RAM, SSD Storage
Up to 3.3 GHz Intel Xeon Scalable processor
High frequency Intel Xeon processors
24/7 support/server monitoring`,
      perpetualPrice: 1778400.00,
    },
    7000: {
      specs: `UP TO 7,000 PAX C4 Server 4x Large
16 Cores, 30GB RAM, SSD Storage
2.9 GHz Intel Xeon E5-2666 v3
Intel AVX+, AVX2+, Intel Turbo EBS Optimized
10 Gbps Network, 24/7 support/server monitoring`,
      perpetualPrice: 2452993.92,
    },
    15000: {
      specs: `UP TO 15K PAX M5a Server 8x Large
36 Cores, 60GB RAM, SSD Storage
2.9 GHz Intel Xeon E5-2666 v3
Intel AVX+, AVX2+, Intel Turbo EBS Optimized
10 Gbps Network, 24/7 support/server monitoring`,
      perpetualPrice: 3205587.84,
    },
    30000: {
      specs: `UP TO 30K PAX M5a Server 12x Large
48 Cores, 192GB RAM, SSD Storage
2.9 GHz Intel Xeon E5-2666 v3
Intel AVX+, AVX2+, Intel Turbo EBS Optimized
10 Gbps Network, 24/7 support/server monitoring`,
      perpetualPrice: 5719134.72,
    },
    60000: {
      specs: `UP TO 60K PAX M5a Server 16x Large
64 Cores, 256GB RAM, SSD Storage
2.4 GHz Intel Xeon Scalable Processor (Broadwell E5-2686 v4 or Haswell E5-2676 v3)
EBS-Optimized, 24/7 support/server monitoring`,
      perpetualPrice: 7136712.96,
    },
  },
};

const ServicesPage = ({ details, setDetails }) => {
  const [type, setType] = useState('Subscription');
  const [population, setPopulation] = useState(1000);
  const [autoDetails, setAutoDetails] = useState({});

  useEffect(() => {
    const selected = pricingData[type][population];
    setAutoDetails(selected);

    setDetails((prev) => ({
      ...prev,
      typeOfSubscription:
        type === 'Subscription'
          ? 'PRIISMS Online Subscription'
          : 'PRIISMS PERPETUAL LICENSE',
    }));
  }, [type, population, setDetails]);

  return (
    <div className="section">
      <h3>Service Configuration</h3>

      <div className="form-row">
        <div className="form-col">
          <label>Type</label>
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Subscription</option>
            <option>Licensed</option>
          </select>
        </div>

        <div className="form-col">
          <label>Population</label>
          <select
            className="form-control"
            value={population}
            onChange={(e) => setPopulation(Number(e.target.value))}
          >
            {[1000, 4000, 7000, 15000, 30000, 60000].map((pop) => (
              <option key={pop} value={pop}>
                {pop.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="section">
        <h4>{type} Pricing</h4>

        <p><strong>Specs:</strong></p>
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>{autoDetails?.specs}</pre>

        {type === 'Subscription' ? (
          <>
            <p><strong>Rate Per Student:</strong> ₱{autoDetails.rate?.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            <p><strong>One-Time Cost (OTC):</strong> ₱{autoDetails.otc?.toLocaleString()}</p>
          </>
        ) : (
          <p><strong>Perpetual License Cost:</strong> ₱{autoDetails.perpetualPrice?.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        )}

        <p><strong>Multiple Campus?</strong> Yes</p>
        <p><strong>Reseller?</strong> Optional</p>
      </div>
    </div>
  );
};

export default ServicesPage;

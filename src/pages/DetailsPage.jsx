import React from 'react';
import '../styles/DetailsPage.css';

const DetailsPage = ({ details, setDetails }) => {
  const preparedOptions = {
    'Alyssa April Narvaez': {
      title: 'Sales Support Coordinator',
      email: 'anarvaez@princetech.com.ph',
      prefix: 'SA05'
    },
    'Jonnel Balmores': {
      title: 'Sales and Marketing Associate',
      email: 'jfbalmores@princetech.com.ph',
      prefix: 'SA03'
    },
    'Ivy Kaye Gurtiza': {
      title: 'Sales and Marketing Associate',
      email: 'ivgurtiza@princetech.com.ph',
      prefix: 'SA04'
    }
  };

  const notedOptions = {
    'Danny Gutierrez': {
      title: 'VP - Operations',
      email: 'dannyg@princetech.com.ph'
    },
    'Carlos Delos Santos': {
      title: 'President/CEO',
      email: 'info@princetech.com.ph'
    }
  };

  const reportCount = {
    'Alyssa April Narvaez': 10001,
    'Jonnel Balmores': 10023,
    'Ivy Kaye Gurtiza': 10018
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'preparedByName') {
      const option = preparedOptions[value];
      const count = reportCount[value] || 10000;
      const prefix = option.prefix;
      const generatedRef = `${prefix} ${count}`;

      setDetails(prev => ({
        ...prev,
        preparedByName: value,
        refNumber: generatedRef,
        preparedByTitle: option.title,
        preparedByEmail: option.email
      }));
    } else if (name === 'notedByName') {
      const option = notedOptions[value];
      setDetails(prev => ({
        ...prev,
        notedByName: value,
        notedByTitle: option.title,
        notedByEmail: option.email
      }));
    } else {
      setDetails(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="details-container">
      <div className="section">
        <h3>General Information</h3>
        <div className="form-row">
          <div className="form-col">
            <input
              type="text"
              className="form-control"
              placeholder="Ref Number"
              name="refNumber"
              value={details.refNumber}
              readOnly
            />
          </div>
          <div className="form-col">
            <input
              type="date"
              className="form-control"
              name="dateIssued"
              value={details.dateIssued}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Client Information</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Company Name"
          name="clientName"
          value={details.clientName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Designation"
          name="clientPosition"
          value={details.clientPosition}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          name="clientAddress"
          value={details.clientAddress}
          onChange={handleChange}
        />
      </div>

      <div className="section">
        <h3>Prepared By</h3>
        <select
          className="form-control"
          name="preparedByName"
          value={details.preparedByName}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {Object.keys(preparedOptions).map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          value={details.preparedByTitle}
          readOnly
        />
        <input
          type="email"
          className="form-control"
          value={details.preparedByEmail}
          readOnly
        />
      </div>

      <div className="section">
        <h3>Noted By</h3>
        <select
          className="form-control"
          name="notedByName"
          value={details.notedByName}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {Object.keys(notedOptions).map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          value={details.notedByTitle}
          readOnly
        />
        <input
          type="email"
          className="form-control"
          value={details.notedByEmail}
          readOnly
        />
      </div>
    </div>
  );
};

export default DetailsPage;

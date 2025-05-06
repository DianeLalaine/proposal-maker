import '../styles/main.css';
import React from 'react';
import { useFont } from '../context/FontContext';

const CustomizePage = () => {
  const { headingFont, contentFont, setHeadingFont, setContentFont } = useFont();

  return (
    <div className="section">
      <h3>Fonts</h3>

      <div className="form-group">
        <label>Heading Font</label>
        <div className="font-options">
          {[
            { label: 'Arial', font: 'Arial, sans-serif' },
            { label: 'Times New Roman', font: "'Times New Roman', serif" },
            { label: 'Georgia', font: 'Georgia, serif' },
            { label: 'Verdana', font: 'Verdana, sans-serif' }
          ].map(({ label, font }) => (
            <div
              key={label}
              className={`font-option ${headingFont === font ? 'active' : ''}`}
              style={{ fontFamily: font }}
              onClick={() => setHeadingFont(font)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Content Font</label>
        <div className="font-options">
          {[
            { label: 'Arial', font: 'Arial, sans-serif' },
            { label: 'Times New Roman', font: "'Times New Roman', serif" },
            { label: 'Georgia', font: 'Georgia, serif' },
            { label: 'Verdana', font: 'Verdana, sans-serif' }
          ].map(({ label, font }) => (
            <div
              key={label}
              className={`font-option ${contentFont === font ? 'active' : ''}`}
              style={{ fontFamily: font }}
              onClick={() => setContentFont(font)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;

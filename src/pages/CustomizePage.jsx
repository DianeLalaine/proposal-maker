import '../styles/main.css';
import React, { useEffect, useState } from 'react';

const CustomizePage = () => {
  const [primaryColor, setPrimaryColor] = useState('#4361ee');
  const [headingFont, setHeadingFont] = useState('Arial, sans-serif');
  const [contentFont, setContentFont] = useState('Arial, sans-serif');

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--font-heading', headingFont);
    document.documentElement.style.setProperty('--font-content', contentFont);

    document.querySelectorAll('.proposal-title').forEach(el => {
      el.style.fontFamily = headingFont;
    });
    document.querySelectorAll('.proposal p, .proposal h3').forEach(el => {
      el.style.fontFamily = contentFont;
    });
  }, [primaryColor, headingFont, contentFont]);

  return (
    <>
      <div className="section">
        <h3>Colors</h3>
        <div className="color-options">
          {['#4361ee', '#3a86ff', '#38b000', '#f72585', '#7209b7', '#2b2d42'].map(color => (
            <div
              key={color}
              className={`color-option ${primaryColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setPrimaryColor(color)}
            ></div>
          ))}
        </div>
      </div>

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
    </>
  );
};

export default CustomizePage;

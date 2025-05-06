import React, { createContext, useState, useContext } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [headingFont, setHeadingFont] = useState('Arial, sans-serif');
  const [contentFont, setContentFont] = useState('Arial, sans-serif');

  return (
    <FontContext.Provider value={{
      headingFont,
      setHeadingFont,
      contentFont,
      setContentFont
    }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);

import React, { createContext, useState, useContext } from 'react';
import logo from "../images/logo.png";
import { TbBackground } from 'react-icons/tb';
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeStyles = {
    light: {
      textColor: '#000',
      logo: logo,
      background:"#121212",

    },
    dark: {
      textColor: '#fff',
      logo: logo,
      background:"#ffffff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles: themeStyles[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n'; // Import i18n configuration

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      
      {/* Buttons to switch between languages */}
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}

export default App;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';
import App from './App';
import './App.global.scss';

render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Router>, document.getElementById('root'));

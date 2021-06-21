import React, { useRef, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import { useTranslation } from "react-i18next";
import {Container, Row, Col} from 'react-bootstrap';
// import ReactFlagsSelect from 'react-flags-select';
// import 'react-flags-select/scss/react-flags-select.scss';


export default function LanguageSwitcher(props) {
  const {t, i18n} = useTranslation();


  const onSelectLang = (lang) => {
    if(lang === "DZ"){
      i18n.changeLanguage('dz');
      localStorage.setItem('lng', "dz");
    }
    else{
      i18n.changeLanguage('en');
      localStorage.setItem('lng', "en");
    }
  }
  //const selectedCountry = (localStorage.getItem('lng')==="en")? "US":"BT";

  return (
    <Suspense fallback="loading">
          <div className={`language-switcher `}>
          <span>{t('language')} </span>
          <span className="dzongkha" onClick={() => onSelectLang("DZ")}>རྫོང་ཁ།</span> <span>|</span> <span className="english" onClick={() => onSelectLang("EN")}>EN</span>
          </div>
    </Suspense>
  );
}

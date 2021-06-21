import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import { useTranslation, Trans } from "react-i18next";
import appIcon from "../assets/img/faviconicon.png";
import appBackground from "../assets/img/bg42.png";

import MainMenu from "./MainMenu";
import Header from "./Header";

import {Row, Col} from 'react-bootstrap';
import errorsound  from "../sounds/error.wav";
//import "./assets/sass/photon.scss";

//import "react-simple-keyboard/build/css/index.css";



export default function Home() {

  //const soundA = ;
  const {t, i18n} = useTranslation();

  const [dzFontFamily] = useState((localStorage.getItem('lng')==="dz")? ((localStorage.getItem('font'))? localStorage.getItem('font'): "wangdi29"):"");

  return (
    <>
      <Row>
        <Col>
          <div className="welcome">
            <div className={`title `}>
            {t('welcome')}
            </div>
            <div className={`title `}>
            {t('instruction')}
            </div>
            <img src={appIcon} alt="app-logo"></img>
          </div>
          <img src={appBackground} className="backgroundimage" alt="app background"></img>
        </Col>
      </Row>
    </>
  );
}

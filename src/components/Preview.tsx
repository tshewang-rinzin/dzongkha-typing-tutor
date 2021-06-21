import React, { useRef, useState, useEffect, Suspense } from "react";
// import { Link } from "react-router-dom";
// import Keyboard from "react-simple-keyboard";
import { useTranslation } from "react-i18next";
import DzongkhaKeyboard from "../keyboard/DzongkhaKeyboard";
import Hands from "../hands/Hands";
import ControlButtons from "./ControlButtons";


import {Container, Row, Col, ProgressBar} from 'react-bootstrap';

//import "./assets/sass/photon.scss";

//import "react-simple-keyboard/build/css/index.css";
// import {vocalSound} from  "../sounds/vocalSound";
import {keyboardLayoutSetter} from "../utils/KeyboardLayoutSetter";


import useKeyPress from '../hooks/useKeyPress';
import { generate } from '../utils/words';
import { convertToUnicodeNumber } from '../utils/unicodeConvertor';
import { currentTime } from '../utils/time';
import logo from '../assets/img/faviconicon.png';

import "../assets/scss/typing.scss";
import "../assets/scss/lesson.scss";

import useSound from 'use-sound';
import correctSound from '../sounds/keystroke.wav';
import inCorrectSound from '../sounds/error.wav';
import successSound from '../sounds/clap.wav';
import {vocalSound} from '../sounds/VocalSound';

// import VocalSound from '../sounds/VocalSound';

//get lessons


export default function Preview(props) {
  const {t, i18n} = useTranslation();

  const initialWords = generate(props.lessonContent);
  const totalCharacterCount = initialWords.length;


  const [outgoingChars, setOutgoingChars] = useState('');
  const [leftPadding, setLeftPadding] = useState(
    new Array(50).fill(' ').join(''),
  );

  const [spacingPadding, setSpacingPadding] = useState(
    new Array(30).fill(' ').join(''),
  );
  const [progress, setProgress] = useState(0);

  const [progressLabel, setProgressLabel] = useState(progress+" %");
  // const [tempOutgoingChars, setTempOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  // const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  let marginwidthForNextCharacterHint = "500px";
  const [marginCurrentChar, setMarginCurrentChar] = useState(marginwidthForNextCharacterHint);

  return (
    <>
      <Row>
        <Col>
          <div className={`d-flex justify-content-between lessonName `}>
              <div className="p-2"></div>
              <div className="p-2">{t(props.title)}</div>
              <div className="p-2"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`playground`}>
            {/* {(completed) &&
              <>
                <div className="lesson-summary">
                  <div className="lesson-summary-content">
                    <h2>{t('lessoncomplete')}</h2>
                        <h4>Your score</h4>
                        <div className="scorevalue"><span>{t('speedlabel')}:</span> <span className="speedvalue">{convertToUnicodeNumber(cpm)}</span></div>
                        <h4>Time taken</h4>
                        <div>{timeTaken}</div>
                  </div>
                </div>
              </>
            } */}
            <div className="lesson-content-box">
              <div className="lesson-content">
                <div className="Character">
                  {(incomingChars!=="") &&
                    <div className="next-one-character" style={{marginLeft:marginCurrentChar}}>{currentChar}</div>
                  }
                  <span className="Character-out">
                    {(leftPadding + outgoingChars).slice(-40)}
                  </span>
                  <span className="Character-current">{currentChar}</span>
                  <span className="Next-character">{incomingChars.substr(0, 50)}</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

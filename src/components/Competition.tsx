import React, { useRef, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import { useTranslation } from "react-i18next";
import appIcon from "../assets/img/faviconicon.png";
import appBackground from "../assets/img/bg42.png";
import DzongkhaKeyboard from "../keyboard/DzongkhaKeyboard";
import Hands from "../hands/Hands";
import ControlButtons from "./ControlButtons";


import MainMenu from "./MainMenu";

import Header from "./Header";
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';

//import "./assets/sass/photon.scss";

//import "react-simple-keyboard/build/css/index.css";
// import {vocalSound} from  "../sounds/vocalSound";
import {keyboardLayoutSetter} from "../utils/KeyboardLayoutSetter";


import useKeyPress from '../hooks/useKeyPress';
import { generate } from '../utils/words';
import { currentTime } from '../utils/time';
import logo from '../assets/img/faviconicon.png';

import "../assets/scss/typing.scss";
import "../assets/scss/lesson.scss";

import useSound from 'use-sound';
import correctSound from '../sounds/keystroke.wav';
import inCorrectSound from '../sounds/error.wav';
import successSound from '../sounds/vocals/Success.mp3';

// import VocalSound from '../sounds/VocalSound';

//get lessons


export default function Competition(props) {

  const initialWords = generate(props.lessonContent);

  const totalCharacterCount = initialWords.length;

  const convertToUnicodeNumber = (input, lng) => {
    var standard_numsets = new Array("0","1","2","3","4","5","6","7","8","9");
    var dzongkha_numsets = new Array("༠","༡","༢","༣","༤","༥","༦","༧","༨","༩");

    var englishDigits = {
      '༠': '0',
      '༡': '1',
      '༢': '2',
      '༣': '3',
      '༤': '4',
      '༥': '5',
      '༦': '6',
      '༧': '7',
      '༨': '8',
      '༩': '9'
    };

    var dzongkhaDigits = {
      '0': '༠',
      '1': '༡',
      '2': '༢',
      '3': '༣',
      '4': '༤',
      '5': '༥',
      '6': '༦',
      '7': '༧',
      '8': '༨',
      '9': '༩'
    };
    if(localStorage.getItem('lng') === "dz"){
      return input.toString().replace(/[0123456789]/g, function(s) {
        return dzongkhaDigits[s];
      });
    }
    else{
      return input;
    }

    //return input;

  }
  const {t, i18n} = useTranslation();

  const [leftPadding, setLeftPadding] = useState(
    new Array(50).fill(' ').join(''),
  );

  const [spacingPadding, setSpacingPadding] = useState(
    new Array(30).fill(' ').join(''),
  );
  const [outgoingChars, setOutgoingChars] = useState('');

  const [progress, setProgress] = useState(0);

  const [progressLabel, setProgressLabel] = useState(progress+" %");
  // const [tempOutgoingChars, setTempOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  // const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  const [startTime, setStartTime] = useState();
  const [timeTaken, setTimeTaken] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);

  const [errors, setErrors] = useState(0);

  const [characterCount, setCharacterCount] = useState(0);
  const [cpm, setCpm] = useState(0);

  const [accuracy, setAccuracy] = useState(0);
  const [typedChars, setTypedChars] = useState('');

  const [keystrokes, setKeystrokes] = useState(0);
  const [wrongKeystrokes, setWrongKeystrokes] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const [completed, setCompleted] = useState(false);

  const [playCorrect] = useSound(correctSound);
  const [playInCorrect] = useSound(inCorrectSound);
  const [playSuccess] = useSound(successSound);
  const [englishKeyboard, setEnglishKeyboard] = useState("");

  const [dzongkhaKeyboardLayout, setDzongkhaKeyboardLayout] = useState("default");


  // localStorage.setItem("showkeyboard","1");
  // //preferences
  const showkeyboardPref = (localStorage.getItem("showkeyboard") == 1)? 1:0;
  const showFingersPref = (localStorage.getItem("showfingers") == 1)? 1:0;
  const keyboardColorPref = (localStorage.getItem("keyboardcolor") == 1)? 1:0;
  const playSoundPref = (localStorage.getItem("playsound") == 1)? 1:0;
  const fontPref = (localStorage.getItem("font"))? localStorage.getItem("font"):"jomolhari";




  const [showKeyboard, setShowKeyboard] = useState(showkeyboardPref);
  const [showFingers, setShowFingers] = useState(showFingersPref);
  const [keyboardTheme, setKeyboardTheme] = useState(keyboardColorPref);
  const [fontPreference, setFontPreference] = useState(fontPref);
  let marginwidthForNextCharacterHint = null;

  if(fontPref == "jomolhari"){
    marginwidthForNextCharacterHint = "440px";
  }
  else if(fontPref == "ddcuchen"){
    marginwidthForNextCharacterHint = "553px";
  }
  else{
    marginwidthForNextCharacterHint = "510px";
  }
  const [marginCurrentChar, setMarginCurrentChar] = useState(marginwidthForNextCharacterHint);
  const [playSoundPreference, setPlaySoundPreference] = useState(playSoundPref);


  let fontPreferenceClass = "playground "+fontPreference;

  const onClickToggle = (buttonType) =>{
    switch(buttonType){
      case "keyboard":
        if(showKeyboard){
          localStorage.setItem("showkeyboard", 0);
          setShowKeyboard(0);
         }
         else{
          localStorage.setItem("showkeyboard", 1);
          setShowKeyboard(1);
         }
        break;
      case "keycolor":
        if(keyboardTheme == true){
          const elem = document.querySelector('.dz-keyboard');
          if(elem){
            elem.classList.remove('myTheme');
            localStorage.setItem("keyboardcolor", 0);
            setKeyboardTheme(false);
          }
         }
         else{
            const elem = document.querySelector('.dz-keyboard');
            if(elem){
              elem.classList.add('myTheme');
              localStorage.setItem("keyboardcolor", 1);
              setKeyboardTheme(true);
            }
         }
        // (keyboardTheme)?setKeyboardTheme(false): setKeyboardTheme(true);
        break;

      case "fingers":
        if(showFingers == true){
          localStorage.setItem("showfingers", 0);
          setShowFingers(false);
         }
         else{
          localStorage.setItem("showfingers", 1);
          setShowFingers(true);
         }
        break;
      case "mute-sound":
        localStorage.setItem("playsound", 0);
        setPlaySoundPreference(0);
        break;

      case "play-sound":
        localStorage.setItem("playsound", 1);
        setPlaySoundPreference(1);
        break;

      case "decrease-font":
        break;

      case "increase-font":
        break;

      case "ddcuchen-font":
        localStorage.setItem("font", "ddcuchen");
        showNextCharHint(fontPreference);
        if(localStorage.getItem('lng') == "dz")
          setFontPreference("ddcuchen");
        else
          setFontPreference("");
        break;

      case "wangdi29-font":
        localStorage.setItem("font", "wangdi29");

        props.changeFont();
        if(localStorage.getItem('lng') == "dz")
          setFontPreference("wangdi29");
        else
          setFontPreference("");
        break;

      case "jomolhari-font":
        localStorage.setItem("font", "jomolhari");
        showNextCharHint(fontPreference);
        if(localStorage.getItem('lng') == "dz"){
          setFontPreference("jomolhari");
        }
        else
          setFontPreference("");
        break;
      default:

    }
  }
  //set margin for next character hint button
  const showNextCharHint = (fontPreference) => {
    let width = document.querySelector('.Character-out').offsetWidth;
    if(fontPreference == "wangdi29")
      setMarginCurrentChar(Math.ceil(width-60)+"px");
    else if(fontPreference == "jomolhari")
      setMarginCurrentChar(Math.ceil(width+50)+"px");
    else
      setMarginCurrentChar(Math.ceil(width+10)+"px");
  }

  useKeyPress(key => {

    if (!startTime) {
      setStartTime(currentTime());
    }
    setKeystrokes(keystrokes+1);
    if(outgoingChars.length <= initialWords.length){
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;

        if(playSoundPreference == 1)
          playCorrect();
          showNextCharHint(fontPreference);
        // let width = document.querySelector('.Character-out').offsetWidth;


        if (leftPadding.length > 0) {
          setLeftPadding(leftPadding.substring(0));
        }

        updatedOutgoingChars += currentChar;
        setOutgoingChars(updatedOutgoingChars);

        setCurrentChar(incomingChars.charAt(0));
        updatedIncomingChars = incomingChars.substring(1);

        setDzongkhaKeyboardLayout(keyboardLayoutSetter(incomingChars.charAt(0)));

        if(updatedOutgoingChars.length != 1){
          const durationInMinutes1 = (currentTime() - startTime) / 60000.0;
          setCpm((updatedOutgoingChars.length / durationInMinutes1).toFixed(2));
          setTimeTaken(durationInMinutes1.toFixed(2));
        }
        setIncomingChars(updatedIncomingChars);

        if (incomingChars.charAt(0) === ' ') {
          setWordCount(wordCount + 1);
          const durationInMinutes = (currentTime() - startTime) / 60000.0;
          setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
        }

        const updatedTypedChars = typedChars + key;
        setTypedChars(updatedTypedChars);


        if (key === currentChar) {
            setAccuracy(
                (100.00 - ((errors/updatedOutgoingChars.length)*100.00).toFixed())
            );
        }
        else{
            setWrongKeystrokes(wrongKeystrokes+1);
            let errorcount = errors + 1;
            setErrors(errorcount);
            setAccuracy(
                (100.00 - ((errorcount/updatedOutgoingChars.length)*100.00).toFixed())
            );
        }

        setProgress((updatedOutgoingChars.length/totalCharacterCount) * 100);
        setProgressLabel(Math.ceil(progress)+" %");
        console.log(progress);
        if(updatedOutgoingChars.length == totalCharacterCount){
          setIncomingChars("");
          setCompleted(true);
          const durationInMinutes = (currentTime() - startTime) / 60000.0;
          setTotalScore(((keystrokes - wrongKeystrokes)/durationInMinutes).toFixed(2));

          if(playSoundPreference == 1)
            playSuccess();
        }
        if(Math.ceil(progress) >= 100){

        }

    }
    else{

    }
  });
  return (
    <>
      <Row>
        <Col>
          <div className={`d-flex justify-content-between lessonName `+fontPreference}>
              <div className="p-2"></div>
              <div className="p-2">{t('competition')}</div>
              <div className="p-2"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`playground`}>
          {(completed) &&
              <>
                <div className="lesson-summary">
                  <div className="lesson-summary-content">
                    <h2>{t('competitioncompleted')}</h2>
                    <div><span>{t('yourscore')} </span> <span>{convertToUnicodeNumber(totalScore)}</span></div>
                    <div><span>{t('timetaken')}</span> {convertToUnicodeNumber(timeTaken)}</div>
                  </div>
                </div>
              </>
            }
            <div className={`lesson-content-box `+fontPreference}>
              <div className="lesson-content">
                <div className="Character">
                  {(incomingChars!="") &&
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
            <div className="progressbar">
              <ProgressBar now={progress} label={convertToUnicodeNumber(progressLabel)} />
            </div>
            <div className="row">
              <div className="col-8">
                <div className="row summary">
                  <div className="col-4" >
                    <span className="speedlabel">{t('speedlabel')}:</span> <span className="speedvalue">{convertToUnicodeNumber(cpm)}</span>
                  </div>
                  <div className="col-3">
                    <span className="errorlabel">{t("errors")}:</span> <span className="errorvalue">{convertToUnicodeNumber(errors)}</span>
                  </div>
                  <div className="col-5">
                    <span className="accuracylabel">{t("accuracy")}:</span> <span className="accuracyvalue">{convertToUnicodeNumber(accuracy)} %</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <ControlButtons onClickCallback={onClickToggle} pageType="test"/>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

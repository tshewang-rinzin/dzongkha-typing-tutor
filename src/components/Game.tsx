import React, { useState, useEffect, Suspense } from 'react';
import { HeartFill, Heart } from 'react-bootstrap-icons';
// import Timer from '../utils/Timer';
import { Button } from 'react-bootstrap';
import { GameChars } from '../utils/GameCharacters';
import useKeyPress from '../hooks/useKeyPress';
import Header from './Header';
import { useTranslation } from 'react-i18next';

import useSound from 'use-sound';
import correctSound from '../sounds/bubblepop.mp3';
import inCorrectSound from '../sounds/error.wav';
import gameOverSound from '../sounds/gameover.mp3';
import successSound from '../sounds/clap.wav';
import startSound from '../sounds/start.mp3';

import '../assets/scss/game.scss';

export default function Game(props) {
  // const character = props.character;

  // console.log());
  const gameContent = GameChars(props.lessonContent);
  const { t, i18n } = useTranslation();
  const [allCharacters, setAllCharacters] = useState(gameContent);

  const [characters, setCharacters] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  const outgoingCharacters = GameChars(props.lessonContent);

  const [lives, setLives] = useState(5);
  const [startTimer, setStartTimer] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [stopGame, setStopGame] = useState(false);
  const [completeGame, setCompleteGame] = useState(false);
  const [overallTime, setOverallTime] = useState(0);
  const [currentChars, setCurrentChars] = useState([]);
  let completedGame = false;
  var speedinterval = null;

  const [totalTime, setTotalTime] = useState();

  const [finalScore, setFinalScore] = useState(0);

  let i = 0;

  const [playCorrect] = useSound(correctSound);
  const [playInCorrect] = useSound(inCorrectSound);
  const [playSuccess] = useSound(successSound);
  const [playGameover] = useSound(gameOverSound);
  const [playStart] = useSound(startSound);

  const playSoundPref = localStorage.getItem('playsound') == 1 ? 1 : 0;
  const [playSoundPreference, setPlaySoundPreference] = useState(playSoundPref);

  function countTimer(totalSeconds) {
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    // var time = "";
    setTotalTime(hour + ':' + minute + ':' + seconds);
    //    if(hour < 60)
    //      hour = "0"+hour;
    //    if(minute < 60)
    //      minute = "0"+minute;
    //    if(seconds < 60)
    //      seconds = "0"+seconds;

    return hour + ':' + minute + ':' + seconds;
  }

  const Timer = (props) => {
    let timerStatus = props.start;
    let timerStop = props.stop ? true : false;
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(timerStatus);
    const [start, setStart] = useState(timerStatus);
    const [stop, setStop] = useState(props.stop);

    useEffect(() => {
      let interval = null;
      if (start) {
        interval = setInterval(() => {
          setOverallTime((overallTime) => overallTime + 1);
        }, 1000);
      }
      if (stop) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    });

    return <>{countTimer(overallTime)}</>;
  };

  const startGameFn = () => {
    setStartGame(true);
    setStartTimer(true);
    playStart();
    if (!completeGame) {
      const speedinterval = setInterval(() => {
        if (!completeGame) {
          if (document.getElementById(i) !== null) {
            document.getElementById(i).style.display = 'block';
            // console.log(i);
            i++;
          } else {
            clearInterval(speedinterval);
          }
        } else {
          clearInterval(speedinterval);
        }
        // console.log(i);
      }, 1000);
    }
  };

  function reduceLife(e, elemRef = '') {
    if (e.animationName === 'animateBubble') {
      playInCorrect();
      if (elemRef !== '') document.getElementById(elemRef).remove();
      if (lives < 2) {
        setStopGame(true);
        setCompleteGame(true);
        setStartTimer(false);
        playGameover();
        // playSuccess();
        completedGame = true;
      }
      setLives(lives - 1);
      setCharIndex(charIndex + 1);
    }
  }

  const Life = (props) => {
    let life = props.lives;
    switch (life) {
      case 5:
        return (
          <>
            <HeartFill></HeartFill> <HeartFill></HeartFill>{' '}
            <HeartFill></HeartFill> <HeartFill></HeartFill>{' '}
            <HeartFill></HeartFill>
          </>
        );
      case 4:
        return (
          <>
            <HeartFill></HeartFill> <HeartFill></HeartFill>{' '}
            <HeartFill></HeartFill> <HeartFill></HeartFill> <Heart></Heart>
          </>
        );
      case 3:
        return (
          <>
            <HeartFill></HeartFill> <HeartFill></HeartFill>{' '}
            <HeartFill></HeartFill> <Heart></Heart> <Heart></Heart>
          </>
        );
      case 2:
        return (
          <>
            <HeartFill></HeartFill> <HeartFill></HeartFill> <Heart></Heart>{' '}
            <Heart></Heart> <Heart></Heart>
          </>
        );
      case 1:
        return (
          <>
            <HeartFill></HeartFill> <Heart></Heart> <Heart></Heart>{' '}
            <Heart></Heart> <Heart></Heart>
          </>
        );
      default:
        return (
          <>
            <Heart></Heart> <Heart></Heart> <Heart></Heart> <Heart></Heart>{' '}
            <Heart></Heart>
          </>
        );
    }
  };

  function animationDurationFn(index) {
    let bubbleAnimationTime = 0;
    if (index < 10) bubbleAnimationTime = '20s';
    else if (index < 20) bubbleAnimationTime = '18s';
    else if (index < 30) bubbleAnimationTime = '14s';
    else if (index < 40) bubbleAnimationTime = '10s';
    else if (index < 50) bubbleAnimationTime = '8s';
    else bubbleAnimationTime = '5s';

    if (index % 2 == 0) return bubbleAnimationTime + ', 20s';
    else return bubbleAnimationTime + ', 18s';
  }

  useKeyPress((key) => {
    console.log(allCharacters);

    if (!completeGame) {
      console.log(allCharacters[charIndex]);

      if (key === allCharacters[charIndex]) {
        if (playSoundPreference === 1) playCorrect();

        if (charIndex < allCharacters.length) {
          document.getElementById(charIndex).remove();

          if (charIndex + 1 === allCharacters.length) {
            setCompleteGame(true);
            setStopGame(true);
            setCompleteGame(true);
            playSuccess();
            setStartTimer(false);
          }
          setCharIndex(charIndex + 1);
        } else {
        }
        setFinalScore(finalScore + 1);
        // let width = document.querySelector('.Character-out').offsetWidth;
      } else {
        if (playSoundPreference === 1) playInCorrect();
      }
    }
  });

  return (
    <>
      <div className="game-container">
        <div className="gameinfo">
          <div className="score">
            {t('yourscore')} {finalScore}
          </div>
          <div className="countdowntimer">
            {t('timetaken')} &nbsp;
            {!completeGame && <Timer start={startTimer} />}
            {completeGame && <Timer start={startTimer} />}
          </div>
          <div className="life">
            {t('life')} {<Life lives={lives} />}
          </div>
        </div>
        <div className="bubble-container">
          {!startGame && !stopGame && (
            <div className="startgame">
              <div className="startbox">
                <Button
                  variant="primary"
                  onClick={() => {
                    startGameFn();
                  }}
                >
                  {t('start_game')}
                </Button>
              </div>
            </div>
          )}
          {startGame && !stopGame && (
            <div className="bubbles">
              {allCharacters.map((value, index) => {
                return (
                  <div
                    className={`bubble x` + ((index % 10) + 1)}
                    key={index}
                    id={index}
                    onAnimationIteration={(e) => {
                      reduceLife(e, index);
                    }}
                    style={{ animationDuration: animationDurationFn(index) }}
                  >
                    <span className="bubble-character">{value}</span>
                  </div>
                );
              })}
            </div>
          )}
          {completeGame && (
            <div className="gameover">
              {lives <= 0 ? (
                <>
                  <h2>{t('game_over')}</h2>
                </>
              ) : (
                <>
                  <h2>{t('game_over')}</h2>
                </>
              )}
              <div>
                <br />
                <h4>{t('yourscore')}</h4>

                <div className="scorevalue">{finalScore}</div>

                <h4>{t('timetaken')}</h4>

                <div>{totalTime}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { HeartFill, Heart } from "react-bootstrap-icons";
// import Timer from '../utils/Timer';
import games from "../data/lessons";
import { Button } from "react-bootstrap";


export default function BubbleLetter(props){
    const character = props.character;
    
    const [lives, setLives] = useState(5);
    const [startTimer, setStartTimer] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [stopGame, setStopGame] = useState(false);
    const [completeGame, setCompleteGame] =useState(false);
    const [overallTime, setOverallTime] = useState(0);


    function countTimer(totalSeconds){
        var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
             return hour+":"+minute+":"+seconds;
    }
    const Timer = (props) => {
        
        let timerStatus = props.start;
        
        const [seconds, setSeconds] = useState(0);
        const [isActive, setIsActive] = useState(timerStatus);
        
        useEffect(() => {
          let interval = null;
          if (isActive) {
            interval = setInterval(() => {
                setOverallTime(overallTime => overallTime + 1);
            }, 1000);
          } else if (!isActive && overallTime !== 0) {
            clearInterval(interval);
          }
          return () => clearInterval(interval);
        }, [isActive, overallTime]);
        
        return (
            <>
                {countTimer(overallTime)}
            </>
            );

    };

    function reduceLife(e, elemRef=""){
        if(e.animationName === "animateBubble"){
            if(elemRef!="")
                document.getElementById(elemRef).remove();
            if(lives < 2 ){
               setStopGame(true);
               setCompleteGame(true);
               setStartTimer(false);
            }
            setLives(lives - 1);
        }
    }
    
    const Life = (props) => {
        
        let lifeIcons = ``;
        let life = props.lives;
        switch(life){
            case 5:
                return(
                    <>
                    <HeartFill></HeartFill> <HeartFill></HeartFill> <HeartFill></HeartFill> <HeartFill></HeartFill> <HeartFill></HeartFill>
                    </>
                )
                break;
            case 4: 
                return(
                    <>
                    <HeartFill></HeartFill> <HeartFill></HeartFill> <HeartFill></HeartFill> <HeartFill></HeartFill> <Heart></Heart> 
                    </>
                )
                break;
            case 3:
                return(
                    <>
                    <HeartFill></HeartFill> <HeartFill></HeartFill> <HeartFill></HeartFill> <Heart></Heart> <Heart></Heart>
                    </>
                )
                break;
            case 2:
                return(
                    <>
                    <HeartFill></HeartFill> <HeartFill></HeartFill> <Heart></Heart> <Heart></Heart> <Heart></Heart>
                    </>
                )
                break;
            case 1: 
                return(
                    <>
                    <HeartFill></HeartFill> <Heart></Heart> <Heart></Heart> <Heart></Heart> <Heart></Heart>
                    </>
                )
                break;
            
            default:
                return(
                    <>
                    <Heart></Heart> <Heart></Heart> <Heart></Heart> <Heart></Heart> <Heart></Heart>
                    </>
                )
                break;
        }
    }

    return (
        <>
        <div className="gameinfo">
            <div className="score">Your Score: 0</div>
            <div className="countdowntimer">Time Elapsed:  &nbsp;
                {!completeGame &&
                    <Timer start={startTimer}  />
                }
                {completeGame &&
                    <Timer start={startTimer}  />
                }
            </div>
            <div className="life">
                Life: {<Life lives={lives}/>}
            </div>
        </div>
        <div className="bubble-container">
            {(!startGame && !stopGame) &&
                <div className="startgame">
                    <div className="startbox">
                        <Button variant="primary" onClick={() => { setStartGame(true); setStartTimer(true)}                                                                                                }>Start Game</Button>
                    </div>
                </div>
            }

            {(startGame && !stopGame) &&
                <div className="bubbles">
                    <div className="bubble x1" id="1" onAnimationIteration={(e)=>{reduceLife(e, "1")}}>
                    <span className="bubble-character">ཏ</span>
                    </div>
                    <div className="bubble x2" id="2" onAnimationIteration={(e)=>reduceLife(e, "2")}>
                    <span className="bubble-character">ཀ</span>
                    </div>
                    <div className="bubble x3" id="3" onAnimationIteration={(e)=>reduceLife(e, "3")}>
                    <span className="bubble-character">ི</span>
                    </div>
                    <div className="bubble x4" id="4" onAnimationIteration={(e)=>reduceLife(e, "4")}>
                    <span className="bubble-character">ེ</span>
                    </div>
                    <div className="bubble x5" id="5" onAnimationIteration={(e)=>reduceLife(e, "5")}>
                    <span className="bubble-character">ཞ</span>
                    </div>
                    <div className="bubble x6" id="6" onAnimationIteration={(e)=>reduceLife(e, "6")}>
                    <span className="bubble-character">ཆ</span>
                    </div>
                    <div className="bubble x7" id="7" onAnimationIteration={(e)=>reduceLife(e, "7")}>
                    <span className="bubble-character">ར</span>
                    </div>
                    <div className="bubble x8" id="8" onAnimationIteration={(e)=>reduceLife(e, "8")}>
                    <span className="bubble-character">ི</span>
                    </div>
                    <div className="bubble x9" id="9" onAnimationIteration={(e)=>reduceLife(e, "9")}>
                    <span className="bubble-character">ེ</span>
                    </div>
                    <div className="bubble x10" id="10" onAnimationIteration={(e)=>reduceLife(e, "10")}>
                    <span className="bubble-character">ཞ</span>
                    </div>
                </div>
            }
            {completeGame &&
                <div className="gameover">
                    Game Over
                </div>
            }
            
        </div>
        </>
    )
}


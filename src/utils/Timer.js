import React, { useState, useEffect } from 'react';

const Timer = (props) => {

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
    const [overallTime, setOverallTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
    setOverallTime(0);
      setIsActive(false);
    }
  
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

  export default Timer;

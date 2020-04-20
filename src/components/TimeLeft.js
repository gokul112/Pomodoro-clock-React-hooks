import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);


const TimeLeft = ({timeLeft,isStart,currentSession,startTimer,reset}) => {
   

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss',{trim:false});
    return(
     <div className="main">
        <p id="timer-label">{currentSession}</p>
        <h2 id="time-left">{formattedTimeLeft}</h2>
        <button type="button" className={isStart ? 'Stop' : 'Start'} onClick={startTimer}>{isStart ? 'Stop' : 'Start'}</button>
        <button type="button" className = "Reset" onClick={reset}>Reset</button>

    </div>
    )
  
}
export default TimeLeft;
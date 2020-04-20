import React from 'react';
import Header from './Header';
import '../App.css';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';
import usetoState from './usetoState';

function App() {
  const { 
          breakLengthSec,
          sessionLengthSec,
          decrementSessionLength,
          incrementSessionLength,
          decrementLength,
          incrementLength,
          currentSession,
          isStart,
          timeLeft,
          startTimer,
          reset     
          } = usetoState()
         

  return (
    <div className="App">
        <Header title="Pomodoro Clock"/>
        <Break breakLengthSec={breakLengthSec} incrementLength={incrementLength} decrementLength={decrementLength} />
        <TimeLeft timeLeft={timeLeft} isStart={isStart} currentSession={currentSession} startTimer = {startTimer}  reset={reset}/>
        <Session sessionLengthSec={sessionLengthSec} decrementSessionLength={decrementSessionLength} incrementSessionLength={incrementSessionLength}/>
    </div>
  );
}

export default App;

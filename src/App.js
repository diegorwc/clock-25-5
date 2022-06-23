import React, { useEffect } from 'react';
import logo from './logo.svg';
import { reset, incrementBreak, decrementBreak, incrementSession, decrementSession, decrementTimer, timerIsRunning, timerNotRunning, timerStatus } from './features/clock/clockSlice'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const breakLength = useSelector(state => state.clock.breakLength) 
  const sessionLength = useSelector(state => state.clock.sessionLength)
  // const timer = useSelector(state => state.clock.remainingTime)
  // const isTimerRunning = useSelector(state => state.clock.timerRunning)
  const dispatch = useDispatch();
  // transforma segundos para mm:ss
  // const breakTimer = new Date(breakLength * 1000).toISOString().substring(14, 19)  
  // const sessionTimer = new Date(timer * 1000).toISOString().substring(14, 19)  
  // console.log(breakTimer, sessionTimer)
  let idTimer = 0;
  // useEffect(() => {
  //   if(isTimerRunning) {
  //     idTimer = setTimeout(() => dispatch(decrementTimer()), 1000)          
  //   }
  // })
      
  // function startTimer() {
  //   console.log(isTimerRunning)
  //   let intervalId = '';
  //   if(isTimerRunning) {
  //     clearInterval(intervalId)
  //     dispatch(timerNotRunning())
  //   }
  //   if(!isTimerRunning) {
  //     intervalId = setInterval(() => dispatch(decrementTimer()), 1000)
  //     dispatch(timerIsRunning())
  //   }           
  //   console.log(intervalId)
  // }
  

  // if(isTimerRunning) setInterval(() => dispatch(decrementTimer()), 1000)
    
  
  return (
    <div className="App">
      <div className="row">        
        <div className="btn bi bi-dash-square col-1" id="break-decrement" onClick={() => dispatch(decrementBreak())}></div>
        <div className="col-1" id="break-length">{breakLength}</div>
        <div className="btn bi bi-plus-square col-1" id="break-increment" onClick={() => dispatch(incrementBreak())}></div>        
        <div className="btn col-1 bi bi-dash-square" id="session-decrement" onClick={() => dispatch(decrementSession())}></div>
        <div className="col-4" id="session-length">{sessionLength}</div>
        <div className="btn col-1 bi bi-plus-square" id="session-increment" onClick={() => dispatch(incrementSession())}></div>
        <div className="btn btn-danger col-2" id="reset" onClick={() => dispatch(reset())}>Reset</div>
      </div>
      <div className="row">                  
        <div className="col-3" id="break-label">Break Length</div>
        <div className="col-1"></div>
        <div className="col-4" id="session-label">Session Length</div>        
        <div></div>        
      </div>      
      <hr />
      <div className="row">
          <div className="col-5"></div>          
          <div className="col-2" id="timer-label">Session</div>          
      </div>
      <br />
      <div className="row">
        <div className="col-5"></div>
        <div className="col-2" id="time-left"></div>
      </div>
      <br />           
      <div className="row">
        <div className="col-5"></div>           
        <div className="col-2">Time left</div>
        <div className="btn btn-success col-2" id="start_stop" onClick={() => dispatch(timerStatus())}>Start</div>
      </div>
    </div>

  );
}

export default App;

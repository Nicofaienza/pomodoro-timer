import Countdown from "./components/Countdown";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './index.css'
import StartButton from "./components/StartButton";
import { MdRestartAlt } from "react-icons/md";



function App() {

  const initialStatus = {
    minutes: 25,
    seconds: 0
  }

  const initialStatusBreak = {
    minutes: 5,
    seconds: 0
  }

  /* Estados del temporizador principal */
  const [startingMinutes, setStartingMinutes] = useState(initialStatus.minutes)
  const [minutes, setMinutes] = useState(initialStatus.minutes);
  const [seconds, setSeconds] = useState(initialStatus.seconds);
  
  /* Estados del temporizador del break */
  const [startingMinutesBreak, setStartingMinutesBreak] = useState(initialStatusBreak.minutes);
  const [minutesBreak, setMinutesBreak] = useState(initialStatusBreak.minutes);
  const [secondsBreak, setSecondsBreak] = useState(initialStatusBreak.seconds)

  const [start, setStart] = useState(false);

  const handleIncrease = () =>{
    if (startingMinutes < 60){setStartingMinutes(startingMinutes + 1);}
    if (minutes < 60){setMinutes(minutes + 1);}
  }

  const handleDecrease = () => {
    if (startingMinutes > 1){setStartingMinutes(startingMinutes - 1);}
    if (minutes > 1){setMinutes(minutes - 1);}
  }

  const handleIncreaseBreak = () =>{
    if (startingMinutesBreak < 60){setStartingMinutesBreak(startingMinutesBreak + 1);}
    if (minutesBreak < 60){setMinutesBreak(minutesBreak + 1);}
  }  

  const handleDecreaseBreak = () => {
    if (startingMinutesBreak > 1){setStartingMinutesBreak(startingMinutesBreak - 1);}
    if (minutesBreak > 1){setMinutesBreak(minutesBreak - 1);}
  }

  const handleReset = () => {
    setMinutes(startingMinutes)
    setSeconds(initialStatus.seconds)
    setMinutesBreak(startingMinutesBreak)
    setSecondsBreak(initialStatusBreak.seconds)
}

  const handleStartOn = () => {
    setStart(true);
  }

  const handleStartOff = () => {
    setStart(false)
    setMinutes(startingMinutes)
    setSeconds(initialStatus.seconds)
  }

  return (
    <div className="App">

        {!start ?
        <div id="container">
          <h1>Pomodoro Timer</h1>
          <div id="set-container">
            <div className="set">
              <h3>Minutos de sesión</h3>
              <div>
                <FaArrowLeft onClick={handleDecrease} className = "arrow-btn" /> 
                <p>{startingMinutes}</p>
                <FaArrowRight onClick={handleIncrease} className = "arrow-btn" />
              </div>
            </div>

            <div className="set">
              <h3>Minutos de break</h3>
              <div>
                <FaArrowLeft onClick={handleDecreaseBreak} className = "arrow-btn" /> 
                <p>{startingMinutesBreak}</p>
                <FaArrowRight onClick={handleIncreaseBreak} className = "arrow-btn" />
              </div>
            </div>
          </div>
            <StartButton handleStartOn={handleStartOn} />
        </div>
      
        :

        <div id="countdown-container">
          <FaArrowLeft onClick={handleStartOff} id="btn-back" className = "arrow-btn" /> 
          <Countdown minutes = {minutes} setMinutes = {setMinutes} seconds = {seconds} setSeconds = {setSeconds} minutesBreak = {minutesBreak} setMinutesBreak = {setMinutesBreak} secondsBreak = {secondsBreak} setSecondsBreak = {setSecondsBreak}  start = {start} startingMinutes = {startingMinutes} startingMinutesBreak = {startingMinutesBreak} /> 
          <MdRestartAlt onClick={handleReset} className="arrow-btn btn" />
        </div>
      }
      
    </div>
  );
}

export default App;

import {Buttons} from "./Buttons"
import { useState, useEffect } from "react";
import '../index.css';
import useSound from 'use-sound';
import audio from '../audio/sonidoTemporizador.mp3'




function Countdown({ minutes, setMinutes, seconds, setSeconds, start, minutesBreak, setMinutesBreak, secondsBreak, setSecondsBreak, startingMinutes, startingMinutesBreak }) {

    
  const [modeSession, setModeSession] = useState(false);
  const [modeBreak, setModeBreak] = useState(false);
  const [modePlaySession, setModePlaySession] = useState(false);
  const [modePlayBreak, setModePlayBreak] = useState(false);
  const [play] = useSound(audio);
  
  
    
    useEffect(() => {
      if(start){
        setModeSession(true);
        setModePlaySession(true);
      }
    }, [start])

    useEffect(() => {
        if (modePlaySession === true){let sampleInterval = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            }
            if (seconds === 0) {
              if (minutes === 0) {
                play()
                clearInterval(sampleInterval);
                setModePlaySession(false);
                setModeSession(false); 
                setMinutesBreak(startingMinutesBreak);
                setModePlayBreak(true);
                setModeBreak(true);
              } else {
                setMinutes(minutes - 1);
                setSeconds(59);
              }
            }
          }, 100);
        return () => {
          clearInterval(sampleInterval);
        };}

        if (modePlayBreak === true){let sampleInterval = setInterval(() => {
          if (secondsBreak > 0) {
            setSecondsBreak(secondsBreak - 1);
          }
          if (secondsBreak === 0) {
            if (minutesBreak === 0) {
              clearInterval(sampleInterval);
              play();
              setModeBreak(false);
              setModePlayBreak(false)
              setModePlaySession(true);
              setModeSession(true);
              setMinutes(startingMinutes);
            } else {
              setMinutesBreak(minutesBreak - 1);
              setSecondsBreak(59);
            }
          }
        }, 100);
      return () => {
        clearInterval(sampleInterval);
      };}
      });

    return (
        <div className="counter-container">

            <h2>{modeSession ? "Session" : "Break"}</h2>

            <div>
                {modeSession ? 
                  <p>{(minutes >= 10 ? minutes : '0' + minutes)}:{(seconds >= 10 ? seconds : '0' + seconds)} </p>
                : modeBreak ?
                  <p>{(minutesBreak >= 10 ? minutesBreak : '0' + minutesBreak)}:{(secondsBreak >= 10 ? secondsBreak : '0' + secondsBreak)} </p>
                : <></>}
            </div>
            <Buttons modeSession = {modeSession} modeBreak = {modeBreak} setModePlaySession = {setModePlaySession} setModePlayBreak = {setModePlayBreak} modePlaySession = {modePlaySession} modePlayBreak = {modePlayBreak}/>
                        

        </div>
    );

}

export default Countdown;
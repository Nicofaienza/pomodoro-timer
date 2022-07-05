import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import '../index.css'



export  const Buttons = ({setModePlaySession, setModePlayBreak, modePlayBreak, modePlaySession, modeSession, modeBreak}) => {

        const handlePlay = () => {
            if (modeSession === true){
                setModePlaySession(true);
            }
            if (modeBreak === true){
                setModePlayBreak(true);
            }
        
        }

        const handlePause = () => {
            if (modeSession === true) {
                setModePlaySession(false);
            }
            if (modeBreak === true){
                setModePlayBreak(false);
            }
           
        }

        return(
            <div className="icons-container">
                {modePlaySession || modePlayBreak ? 
                <BsPauseFill onClick={handlePause} id = "pause-btn" className = "arrow-btn btn" />
                :
                <BsPlayFill onClick={handlePlay}  className = "arrow-btn btn" />
                }
            </div> 
        )
}


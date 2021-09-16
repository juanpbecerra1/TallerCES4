import { useEffect, useContext, useState} from "react";
import UserContext from '../Context/UserContext';

const Timer = () => {

    const userContext = useContext(UserContext);
    const {finishGame} = userContext;
    const { timer } = userContext;

    const [seconds, setSeconds] = useState(timer);

    useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          finishGame(true);
        }
    });
    return (
        <div>
        {  seconds === 0
           ? <h3>Game Over!</h3>
            : <h1> {0}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
        }
        </div>
    );
}
    
export default Timer;
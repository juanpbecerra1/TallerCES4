import {useContext, useEffect} from "react";
import Navbar from "../Components/Navbar";
import Game from '../Components/Game';
import UserContext from '../Context/UserContext';

const Questions = () => {
    const userContext = useContext(UserContext);
    const {getQuestions, userData} = userContext;

  useEffect(() => {  
        getQuestions(userData);
  }, []); 

return(
        <>
        <Navbar/>
        <Game/>
    </>
)
}

export default Questions;
import {useReducer}  from "react";
import UserContext from "./UserContext";
import GameReducer,{type} from "./GameReducer";


const GameState = (props) => {
  const initialState = {
    user: '',
    questions:[],
    question: '',
    points: 0,
    level: 1,
    timer: 30,
    gameOver: false
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const registerUser = userData => {
    dispatch({
      type: type.activeUser,
      payload: userData
    })
  }
  
    const getQuestions = async (userData) => {
      const url = `https://opentdb.com/api.php?amount=10&category=${userData.category}&difficulty=${userData.difficulty}&type=multiple`;
      const data = await fetch(url);
      const questions = await data.json();
        dispatch({
           type: type.activeQuestions,
           payload: questions.results 
        })
    };
    const addPoints = points => {
      dispatch({
        type: type.activePoints,
        payload: points
      })
    };
    const addLevel = level =>{
      dispatch({
        type: type.level,
        payload: level
      })
    };
    const resetTimer = timer =>{
      dispatch({
        type: type.resetTime,
        payload: timer
      })
    };
    const finishGame = gameOver => {
      dispatch({
        type: type.finishGame,
        payload: gameOver
      })
    };
   return (
    <UserContext.Provider 
        value={{
          userData: state.userData,
          questions: state.questions,
          registerUser,
          getQuestions,
          finishGame,
          gameOver: state.gameOver,
          addPoints,
          addLevel,
          points: state.points,
          timer: state.timer,
          level: state.level,
          resetTimer
        }}>
     {props.children}
     </UserContext.Provider>
  );
};

export default GameState;

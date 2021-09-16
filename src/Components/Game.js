import { useEffect, useContext, useState } from "react";
import UserContext from '../Context/UserContext';
import Timer from './Timer';
import './Game.css'
import Points from "./Points";
window.getQuestions = [];
const Game = () => {
  const userContext = useContext(UserContext);
  const { questions } = userContext;
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [currenttAnswer, setCurrenttAnswer] = useState('');
  const [answerClicked, setAnswerClicked] = useState(false);
  const { addPoints } = userContext;
  const [pointsAviable, setPointsAviable] = useState(0);
  const { resetTimer } = userContext;
  const { timer } = userContext;    
  const [countQuestion, setCountQuestion] = useState(1);
  const { finishGame } = userContext;
  const { addLevel } = userContext;   
  const { gameOver } = userContext;
  useEffect(() => {
    getQuestion();
  }, [questions]);
  window.gamerFinished = false;
  const getQuestion = () => {   
    if (window.getQuestions.length < 1 && !window.gamerFinished) {
      window.getQuestions = questions;
    } else if (gameOver) {
      window.getQuestions = [];
    };
    randomQuestion();
  }

  const randomQuestion = () => {
    var i = Math.floor(Math.random() * 9);
    var currentCorrectAnswer = window.getQuestions[i]?.correct_answer;
    setCorrectAnswer(currentCorrectAnswer);
    var currentIncorrectAnswers = window.getQuestions[i]?.incorrect_answers;
    currentIncorrectAnswers?.push(currentCorrectAnswer);
    currentIncorrectAnswers?.sort();
    setQuestion(window.getQuestions[i]?.question);
    setAnswers(currentIncorrectAnswers);
  }

  const currentAnswer = (currentAnswer, currentQuestion) => {
    setAnswerClicked(true);
    if (currentAnswer === correctAnswer) {
      setCurrenttAnswer(currentAnswer)
      nextQuestion(currentQuestion);
      clearTimeout(timer);
    } else {
      alert("Game over!");
      resetTimer(0);
      finishGame(true);
    }
  };

  const nextQuestion = (question) => {
    window.getQuestions = window.getQuestions.filter(function (ques) {
      resetTimer(30);
      return ques.question !== question;
    });
    if (window.getQuestions.length < 1) {
      window.gamerFinished = true;
      window.getQuestions = [];
      finishGame(true);
      alert("Congratulations you won");
    }    
  setTimeout(() => {
      addPoints();
      getQuestion();
      setAnswerClicked(false);
      var points = pointsAviable + 1000;
      setPointsAviable(points);
      addPoints(points);
      var level = countQuestion +1;
      setCountQuestion(level);
      addLevel(countQuestion +1);       
    }, 3000);
  };
  return (
    <>
      <div className="container">
        <div className="container-form-title-question">
          {questions ? (
            <h3>{question}</h3>
          ) : null}
        </div>
        <div className="container">
          <div class="row">
            {questions ? (
              answers?.map(selectAnswer => (
                <div class="col-sm-6">
                  <div class="card text-center">
                    <div class="card-body">
                      {answerClicked ? (
                        <button className={currenttAnswer === selectAnswer ? "btn btn-success" : "btn btn-secondary"}
                          onClick={() => currentAnswer(selectAnswer, question)}>
                          {selectAnswer}
                        </button>
                      ) : (
                        <button className={"btn btn-light"}
                          onClick={() => currentAnswer(selectAnswer, question)}>
                          {selectAnswer}
                        </button>
                        
                      )};
                    </div>
                  </div>
                </div>

              ))
            ) : null}
          </div>
          <div>
          <Timer />
          <Points />
        </div>
        </div>
      </div>
    </>
  )

}
export default Game;
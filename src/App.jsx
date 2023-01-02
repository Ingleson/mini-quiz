import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import { Question } from './components/Question/Question';
import { Wellcome } from './components/Wellcome/Wellcome';
import { GameOver } from './components/GameOver/GameOver';

import './styles/main.sass';
import './styles/app.sass'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])


  return (
    <div className="App">
      <h1>Quiz-Program</h1>
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App

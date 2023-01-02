import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import Quiz from '../../img/quiz.svg';

import './wellcome.sass';

export const Wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='wellcome'>
      <h2>Seja bem vindo</h2>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="quiz_img_init" />
    </div>
  )
}
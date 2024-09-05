import { useState } from "react"
import QUESTIONS from '../questions'
import QuizImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionsIndex = userAnswer.length;
    const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={QuizImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
        </div>
    }
    const suffledAnswer = [...QUESTIONS[activeQuestionsIndex].answers];
    suffledAnswer.sort((a, b) => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
                <h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
                <ul id="answers">
                    {suffledAnswer.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}
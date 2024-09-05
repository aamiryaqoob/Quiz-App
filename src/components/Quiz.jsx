import { useState } from "react"
import QUESTIONS from '../questions'

export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionsIndex = userAnswer.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionsIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}
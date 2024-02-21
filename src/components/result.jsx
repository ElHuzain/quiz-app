import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { twMerge } from 'tailwind-merge';
import questions from "../data/exam.json";
import Button from './button';
import { getResultArray } from '../helpers/calculateResults';

const Result = () => {
  const [animate, setAnimate] = useState(false);

  const answers = useSelector(val => val.userAnswers)
  const dispatcher = useDispatch();

  const { total, userTotal, resultsArray, passed } = getResultArray(questions, answers);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100)
  }, []);

  const reset = () => dispatcher({ type: "RESET" })

  return (
    <section className="h-fit animation-fade-up min-h-[300px] p-8 flex flex-col gap-8 justify-between max-w-[500px] w-full rounded-md bg-card">
      <header>
        <h1 className="text-xl font-bold text-center mb-4">{passed ? "CONGRATULATIONS! 🎉" : "Better luck next time :("}</h1>
        <p className="mb-4">You <span className="font-semibold">{passed ? "PASSED" : "FAILED"}</span> with {userTotal} out of {total}.</p>

        {/* Progress bar for fun */}
        <div aria-hidden className="w-full border border-foreground bg-background rounded-md p-1 h-[20px]">
          <div style={{ transitionDuration: "1s", maxWidth: animate ? userTotal + "%" : 0 }} className={twMerge("max-w-0 ease-out transition-all w-full relative h-full bg-foreground")}>
            <span style={{ transitionDelay: "1s" }} className={twMerge("absolute transition-all duration-500 right-0 translate-x-[50%] translate-y-[120%] opacity-0 font-bold", animate && "translate-y-[80%] opacity-1")}>{userTotal}%</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-12">
          <h2>Exam Revision:</h2>
          <ul className="flex flex-col gap-4">

            {
              resultsArray.map((m, i) => {
                const { yourChoice, correctChoice, isCorrect, question } = m;

                return <li style={{ transitionDelay: i / 2 + 1 + "s" }} className={twMerge("flex duration-500 flex-col transition-all translate-y-[10px] opacity-0 gap-1", animate && "translate-y-0 opacity-1")}>
                  <h3>Q{i + 1}) <strong className="font-bold">{question}</strong> </h3>
                  <span>Correct Answer: {correctChoice}</span>
                  <span>Your Answer: <span className={twMerge("p-1 w-fit", isCorrect ? "text-success" : "text-failure")}>
                    {yourChoice} {isCorrect ? "✅" : "❌"}
                  </span></span>
                </li>
              })
            }

          </ul>
        </div>

        <Button onClick={reset} className="w-full mt-8">PLAY AGAIN? 😁</Button>


      </header>
    </section>
  )
}

export default Result
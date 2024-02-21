import React from 'react'
import Button from './button'
import Answer from './Answer'
import questions from '../data/exam.json'
import { twMerge } from 'tailwind-merge'
import useExam from '../hooks/useExam'

const Question = () => {

    const {
        SelectOption,
        SubmitAnswer,
        selected,
        currentQuestion,
        questionData,
        isLastQuestion
    } = useExam(questions);

    return (
        <section className="grid animation-fade-up grid-cols-1 md:grid-cols-[300px_300px] bg-card rounded-md p-8 gap-8">

            <div className="max-w-[800px] w-full">
                <h1 className="text-lg font-bold">Question {currentQuestion}) {questionData.question}</h1>
                <p className="text-background px-2 py-1 mt-2 rounded-md bg-foreground w-fit text-sm">{questionData.degree} Degrees</p>
            </div>

            <div className="max-w-[6300px] w-full flex flex-col gap-10">
                <div className="space-y-6">
                    {
                        questionData.choices.map((item, index) => <Answer SelectOption={SelectOption} key={index} value={item} id={index + 1} checked={selected === index + 1} />)
                    }
                </div>

                <div className="w-full relative">
                    <p className={twMerge("px-4 py-2 absolute transition-all text-center w-full duration-300 transition-y-0 opacity-1", selected && "translate-y-[-10px] opacity-0")}>MAKE A CHOICE</p>
                    <Button
                        disabled={!selected}
                        onClick={SubmitAnswer}
                        className={twMerge("transition-all duration-500 w-full translate-y-[10px] opacity-0", selected && "translate-y-0 opacity-1", isLastQuestion && "bg-foreground text-background")}>
                        {
                            isLastQuestion
                                ? "FINISH 🔥"
                                : "NEXT 🔥"
                        }
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default Question
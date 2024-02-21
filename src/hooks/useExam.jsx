import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const useExam = ({ questions }) => {
    const [selected, setSelected] = useState(null);

    const dispatcher = useDispatch();
    const currentQuestion = useSelector(val => val.currentQuestion);
    const questionData = questions[currentQuestion];

    const SelectOption = (number) => {
        setSelected(number);
    }

    const SubmitAnswer = () => {
        console.log(questions.length);
        console.log(currentQuestion)

        dispatcher({
            type: "ADD_ANSWER",
            payload: parseInt(selected) - 1
        })
        
        setSelected(null);
        
        if (currentQuestion + 1 === questions.length) if (currentQuestion + 1 === questions.length)
            dispatcher({
                type: "FINISH"
        })
    }

    return {
        SelectOption,
        SubmitAnswer,
        selected,
        currentQuestion,
        questionData,
        isLastQuestion: currentQuestion + 1 === questions.length
    }
}

export default useExam
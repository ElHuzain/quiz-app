export const getResultArray = (exam, answers) => {
    let userTotal = 0;
    const total = exam.Tot_degree;
    
    const resultsArray = exam.questions.map((item, index) => {
        
        const { question, choices, correct_choice } = item;
        
        const correctChoice = choices[correct_choice - 1];
        const yourChoice = choices[answers[index]];
        const isCorrect = yourChoice === correctChoice;
        
        if (isCorrect) userTotal += item.degree
        
        return {
            question,
            correctChoice,
            yourChoice,
            isCorrect
        }
    })
    
    return {
        total,
        userTotal,
        resultsArray,
        passed: userTotal > 50
    }
}
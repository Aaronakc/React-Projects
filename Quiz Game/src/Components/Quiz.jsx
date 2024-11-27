import React, { useState } from 'react'
import { question } from './Question'

const Quiz = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [selectedAnswerIndex, setselectedAnswerIndex] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [isLocked, setIsLocked] = useState(false)



  const handleHasAnswered = (index, isCorrect) => {
    if(isLocked){
      return null
    }
      
    setIsLocked(true)
    setHasAnswered()
    setHasAnswered(true)
    setselectedAnswerIndex(index)
    if (isCorrect) {
      setScore(score + 1)
    }
  }


  const handleNext = () => {
    setIsLocked(false)
    const nextQuestion = questionIndex + 1
    if (nextQuestion < question.length) {
      setQuestionIndex(questionIndex + 1)
      setHasAnswered(false)
      setselectedAnswerIndex(null)
    }
    else {
      setShowScore(true)
    }
  }


  const handleReplayGame = () => {
    setQuestionIndex(0)
    setHasAnswered(false)
    setselectedAnswerIndex(null)
    setScore(0)
    setShowScore(false)
  }
  return (

    <div className='flex w-[50%] bg-slate-50 h-[75%] items-center flex-col'>
      <h1 className='text-2xl font-bold mt-[10px]'>Quiz App</h1>

      {showScore ? (<div className='p-10 font-bold'>Your Score is {score} out of {question.length}
        <button className='ml-2 px-7 py-1 bg-green-500 rounded font-normal text-white' onClick={handleReplayGame}>PLAY AGAIN</button>
      </div>) : (

        <>
          <p className='mt-4 text-xl'>{questionIndex + 1}. {question[questionIndex].question}</p>
          <div className='flex flex-col items-center gap-8 mt-[10px] w-[100%] px-8'>
            {question[questionIndex].Options.map((options, index) => <button className={`w-full border-blue-200 border-2 font-semibold p-1
        ${hasAnswered ?
                options.isCorrect ? 'bg-green-500' :
                  selectedAnswerIndex === index ? 'bg-red-200' :
                    ''
                : ''
              }`}
              key={index}
              onClick={() => handleHasAnswered(index, options.isCorrect)}
            >{options.option}</button>)}
          </div>

          <div className='mt-5'>
            <button className={`px-5 py-1 ${hasAnswered ? 'bg-green-700' : 'bg-green-200'}  rounded`} onClick={handleNext}
              disabled={!hasAnswered}>Next</button>
          </div>

          <h3 className='mt-3'>{questionIndex + 1}/{question.length}</h3>
        </>
      )}
    </div>
  )
}

export default Quiz
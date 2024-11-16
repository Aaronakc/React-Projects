import React, { createContext, useState } from 'react'
import App from '../App';
export const multiStepContext=createContext()

const Context = () => {
  const[currentStep,setStep]=useState(1);
  const[userData,setUserData]=useState([]);
  const[finalData,setFinalData]=useState([]);


  const submitData=()=>{
    setFinalData(finalData=>[...finalData,userData])
    setUserData('')
    setStep(1)

  }
  return (
    <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
      <App/>
    </multiStepContext.Provider>
  )
}

export default Context
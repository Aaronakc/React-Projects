import React, { useContext } from 'react'
import First from './Components/First'
import Second from './Components/Second'
import Third from './Components/Third'
import './App.css'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { multiStepContext } from './StoreContext/Context'
import Displaydata from './Components/Displaydata'
 





const App = () => {

  const {currentStep,finalData}=useContext(multiStepContext)

  function showStep(step){
    switch(step){
      case 1:
        return <First/>;
      case 2:
        return <Second/>;
      case 3:
        return <Third/>;
      default:
        return null;
    }
  }

  return (
    <div className='center' >
      <h1>MultiStep Form</h1>
      <div className='stepper-container'>
      <Stepper style={{width:'20%'}} orientation='horizontal' activeStep={currentStep-1} >
        <Step>
          <StepLabel></StepLabel>
        </Step>

        <Step>
          <StepLabel></StepLabel>
        </Step>

        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      </div>

   {showStep(currentStep)}
   {finalData.length>0 ? <Displaydata/>: ''}
      </div>
  )
}

export default App
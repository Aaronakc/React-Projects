import React, { useState } from 'react'
import Container from './Components/Container'
import './App.css'
import Display from './Components/Display'
import ButtonContainer from './Components/ButtonContainer'
const App = () => {
const[calValue,setCalValue]=useState('');
const handleClickedBtn=(buttonText)=>{
if(buttonText == 'AC'){
  setCalValue('');

}
else if(buttonText == '='){
const result=eval(calValue);
setCalValue(result);

}
else if(buttonText== 'DEL'){
  setCalValue(calValue.slice(0, -1));
}
else if(buttonText== '%'){
  const percentageValue=eval(calValue)/100
  setCalValue(percentageValue)
}
else{
  const newDisplayValue=calValue+ buttonText;
  setCalValue(newDisplayValue)
}
}

  return (
    <>
    <Container>
      <Display currentValue={calValue}/>
      <ButtonContainer handleClickedBtn={handleClickedBtn}/>
    </Container>
  
    </>
  )
}


export default App
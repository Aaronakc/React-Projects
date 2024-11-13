import React from 'react'
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({handleClickedBtn}) => {
  let buttons=[
    'AC',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',

  ]
  return (
    <div className={styles.ButtonContainer}>
      {buttons.map((button=>{
        return <button key={button} className={styles.buttons} onClick={()=>handleClickedBtn(button)}>{button}</button>
      }))}
      </div>
  )
}

export default ButtonContainer

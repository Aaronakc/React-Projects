import React from 'react'
import styles from './Display.module.css'

const Display = ({currentValue}) => {
  return (
    <>
    <div className={styles.displayInput}>
      <input type="text" className={styles.inputField} value={currentValue} readOnly/>
      </div>
      </>
  )
}

export default Display
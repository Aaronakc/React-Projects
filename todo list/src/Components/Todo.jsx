import React, { useRef, useState } from 'react'
import TodoList from './TodoList'


const Todo = () => {
  const[todoList,setTodoList]=useState([])
  const inputTextRef=useRef()

  const add=()=>{
    const inputText=inputTextRef.current.value.trim()
    // console.log(inputText)
    if(inputText==''){
      return null
    }
    else{
      const newTodoList=({
        id:Date.now(),
        todoTask:inputText,
        completedTask:false
      })
    setTodoList((prev)=>[...prev,newTodoList])
     inputTextRef.current.value=''

    }

  }
  return (
    <div className='bg-neutral-200 flex flex-col  w-full  max-w-[600px] h-screen max-h-[500px] py-3'>
      <h1 className='pb-4 font-bold text-2xl'>Todo List</h1>

       <div className='flex items-center'>
        <input ref={inputTextRef} type="text" className='outline-none  border-collapse rounded-xl h-9  ml-[10px] p-5 flex-1' placeholder='enter the task to do'/>
        <button onClick={add}className='bg-red-500 text-white px-8 py-2 ml-2 mr-[10px] rounded-2xl cursor-pointer'>Add</button>
       </div>

       <div className='mt-7'>
      {todoList.map((item,index)=>{
        return <TodoList key={index} text={item.todoTask}/>
      })}
       </div>
      </div>
  )
}

export default Todo
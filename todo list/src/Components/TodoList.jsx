import React from 'react'
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

const TodoList = ({text,id,completedTask,deleteTask}) => {
  return (
    <div className='flex  gap-4'>
       <CheckCircleOutlineTwoToneIcon />
      <p>{text}</p>
      {/* ml-auto pushes an element to the right in tailwind */}
      <DeleteForeverTwoToneIcon className="ml-auto" onClick={()=>deleteTask(id)}/>
      
      </div>
  )
}

export default TodoList
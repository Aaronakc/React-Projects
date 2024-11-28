import React from 'react'
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';

const TodoList = ({text,id,completedTask,deleteTask,completeTask}) => {
  return (
    <div className='flex  gap-4 items-center'>
      {
        completedTask? <CheckCircleOutlineTwoToneIcon style={{fontSize: '30px'}} onClick={() => completeTask(id)}/> : <MdOutlineRadioButtonUnchecked style={{fontSize: '30px'}} onClick={() => completeTask(id)} />
      }
       
      <p style={{textDecoration: completedTask && 'line-through'}}>{text}</p>
      {/* ml-auto pushes an element to the right in tailwind */}
      <DeleteForeverTwoToneIcon className="ml-auto" onClick={()=>deleteTask(id)}/>
      
      </div>
  )
}

export default TodoList
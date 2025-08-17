import React from 'react'
import TitleCol from './TitleCol'
import Task from './Task'
import { tasks } from '../assets/data.js'

const FrameCol = ({ nameCol, statusId  = 1}) => {
  // Đếm số task theo statusId
  const taskCount = tasks.filter(task => task.statusId === statusId).length;
  console.log(taskCount);
  
  return (
    <>
      <div className="m-4 py-4 px-3 w-1/4 bg-gray-100 rounded-lg">
        <TitleCol nameCol={nameCol} numberTask={taskCount} />
        <Task statusId={statusId} />
      </div>
    </>
  )
}

export default FrameCol
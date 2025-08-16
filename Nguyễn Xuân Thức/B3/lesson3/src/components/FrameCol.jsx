import React from 'react'
import TitleCol from './TitleCol'
import Task from './Task'


const FrameCol = () => {
  return (
    <>
        <div className="my-10 mx-5 py-4 px-4 w-1/4 bg-gray-300 h-screen rounded-sm">
            <TitleCol nameCol="To do" numberTask={3}/>
            <Task title/>
        </div>
    </>
  )
}

export default FrameCol
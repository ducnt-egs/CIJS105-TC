import React from 'react'
import {EditOutlined, FlagOutlined ,ScheduleOutlined} from '@ant-design/icons'
import { assets, tasks,users} from '../assets/data.js'
const Task = () => {

  return  tasks.slice(0, 3).map((item) => (
    <div key={item.taskId} className='bg-white p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 my-3'>
        <div className='flex justify-between items-center font-bold '>
            <p>{item.title}</p>
            <span><EditOutlined /></span>
        </div>
        <div className=''>
            <p>{item.description}</p>
            <p className='py-1 px-3 inline-block rounded-md bg-blue-700 text-white'>{users.find(user => user.userId === item.assignedTo)?.name}</p>
        </div>

        <div className='my-2'><hr className='text-gray-200'/></div>
        <div className='flex items-center justify-center gap-8'>
            <span className='flex items-center gap-1'><img className='w-4' src={assets.attach_black} alt="" /> {item.assignedTo}</span>
            <span className='flex items-center gap-1'><FlagOutlined /></span>
            <span className='flex items-center gap-1'><ScheduleOutlined />{item.deadline.toLocaleDateString()}</span>
        </div>
    </div>
  ))
}

export default Task
import React from 'react'
import {EditOutlined, FlagOutlined ,ScheduleOutlined} from '@ant-design/icons'
import { assets, tasks, users, flags} from '../assets/data.js'

const Task = ({ statusId = 1 }) => {

  return tasks
    .filter(task => task.statusId === statusId) 
    .map((item) => (
    <div key={item.taskId} className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-3'>
        <div className='flex justify-between items-center font-bold mb-2'>
            <p className='text-sm font-semibold'>{item.title}</p>
            <span><EditOutlined className='text-gray-400'/></span>
        </div>
        <div className='mb-3'>
            <p className='text-xs text-gray-600 mb-2'>{item.description}</p>
            <p className='py-1 px-2 inline-block rounded text-white text-xs font-medium bg-blue-600'>
                {users.find(user => user.userId === item.assignedTo)?.name}
            </p>
        </div>

        <div className='flex items-center justify-center gap-4 text-xs text-gray-500'>
            <div className='flex items-center gap-3'>
                <span className='flex items-center gap-1'>
                    <img className='w-4 h-4' src={assets.attach_black} alt="" /> 
                    {Math.floor(Math.random() * 5) + 1} 
                </span>
                <span className='flex items-center gap-1'>
                    <FlagOutlined style={{ 
                        color: flags.find(f => f.flagId === item.flagId)?.color || '#666' 
                    }} className='w-4 h-4'/>
                </span>
            </div>
            <div className='flex items-center gap-1'>
                <span><ScheduleOutlined className='w-4 h-4'/></span>
                <span>{item.deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
        </div>
    </div>
  ))
}

export default Task
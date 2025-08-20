import React from 'react'

const Header = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2 className='text-[36px] font-bold'>Anonime</h2>
        <p className='text-[18px] text-[#868686]'>Home</p>
        <p className='text-[18px] text-[#868686]'>List anime</p>
        <input className='border border-gray-300 rounded-4xl w-[20%] text-[18px] text-[#868686] pl-[18px] py-[8px] bg-[#374151]' type="text"  placeholder='Search anime or movie'/>
      </div>
    </>
  )
}

export default Header
import React from 'react'
const Card = ({movieName, img, episode, onClick}) => {
  return (
    <div 
      className="flex flex-col gap-2 items-center rounded-lg w-[200px] cursor-pointer hover:scale-105 transition-transform duration-200" 
      onClick={onClick}
    >
      <img src={img} alt={movieName} />
      <p>Episode {episode}</p>
      <h3>{movieName}</h3>
    </div>
  )
}

export default Card
import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="container_card">
            <p>Tôi tên: {props.name}</p>
            <p>Lớp học: {props.className}</p>
            <p>{props.target}</p>
        </div>
    </>
  )
}

export default Card
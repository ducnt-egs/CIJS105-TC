import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'



function App() {


  return (
    <>
      <div className='general'>
        <Header></Header>
        <div className="task_list">
          <MainContent></MainContent>
          <MainContent></MainContent>
          <MainContent></MainContent>
          <MainContent></MainContent>

        </div>
      </div>
    </>
  )
}

export default App

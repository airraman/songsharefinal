import { useState } from 'react'
import Ipod from './components/Ipod'
import Screen from './components/Screen'
import Modal from './components/Modal'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Ipod />
      <dialog className='submit-modal'>
        <Modal />
      </dialog>
    </div>
  )
}

export default App

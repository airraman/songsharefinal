import React, { useState } from 'react'
import axios from 'axios';

const Listener = () => {

  const getModal = () => {
    const modal = document.querySelector(".submit-modal")
    return modal
  }

  const [userName, setUserName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  let userObj ={
    userName,
    phoneNumber
}

  function handleUserName(event){
    console.log(event.target.value)
    setUserName(event.target.value)
    console.log(userName)
  }

  function handlePhoneNumber(event){
    console.log(event.target.value)
    setPhoneNumber(event.target.value)
    console.log(phoneNumber)
  }

  function sendClick(e){
    console.log("Hi from Submit")
    console.log(userObj)


    axios.post('https://sheet.best/api/sheets/c38378fd-348d-4169-9f36-f8cbabea15ae', userObj)
    .then(response => {
      console.log(response);
    })

    setUserName('')
    setPhoneNumber('')
}

  const handleSubmit = (e) => {
    e.preventDefault()
    getModal().showModal()
  }
  return (
    <div className="subscriber-form-container">
        <h2>The best music, globally</h2>
            <form className="subscriber-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="name-label">
                  Enter Name
              </label>
              <input type="text" name="user-name" className="user-input" onChange={handleUserName}></input>
            </div>
            <div className="input-container">
              <label className="name-label">
                  Enter Number
              </label>
              <input type="number" name="user-number" className="user-input" onChange={handlePhoneNumber}></input>
            </div>
            <div className="tag-line">
                One text, every Friday.<br/>
                One song, one playlist, one album
            </div>
            <input type="submit" value="Subscribe" className="subscribe-button" onClick={sendClick} />
        </form>
    </div>
  )
}

export default Listener
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { changeUser } from "../features/userSelect"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios';

const Listener = () => {

  const dispatch = useDispatch()

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
    // console.log(event.target.value)
    setUserName(event.target.value)
    // console.log(userName)
  }

  function handlePhoneNumber(event){
    // console.log(event.target.value)
    setPhoneNumber(event.target.value)
    // console.log(phoneNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName === "" || phoneNumber === "") {
      console.log("Input field is blank")
      return
    }
    axios.post('https://sheet.best/api/sheets/c38378fd-348d-4169-9f36-f8cbabea15ae', userObj)
    .then(response => {
      if (response.status === 200) {
        console.log("POST request successful", userObj)
        dispatch(changeUser("listener"))
        getModal().showModal()
        e.target.reset()
        setUserName('')
        setPhoneNumber('')
      } else {
        console.log("POST request failed")
      }
    })
    .catch(error => {
      console.log('Error occurred during POST request:', error)
    })
  }

  return (
    <div className="subscriber-form-container">
        <h2>The best music, globally</h2>
            <form className="subscriber-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="name-label">
                  Enter Name
              </label>
              <input type="text" name="user-name" className="user-input" onChange={(e) => setUserName(e.target.value)}></input>
            </div>
            <div className="input-container">
              <label className="phone-label">
                  Enter Number
              </label>
              {/* <input type="number" name="user-number" className="user-input" onChange={handlePhoneNumber}></input> */}
              <PhoneInput defaultCountry="US" onChange={setPhoneNumber}/>
            </div>
            <div className="tag-line">
                One text, every Friday.<br/>
                One song, one playlist, one album
            </div>
            <input type="submit" value="Subscribe" className="subscribe-button" />
        </form >
    </div>
  )
}

export default Listener
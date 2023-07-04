import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { changeUser } from "../features/userSelect"
import axios from 'axios';

const Musician = () => {

  const dispatch = useDispatch()

  const getModal = () => {
    const modal = document.querySelector(".submit-modal")
    return modal
  }

  const [artistName, setArtistName] = useState("")
  const [trackName, setTrackName] = useState("")
  const [trackDescription, setTrackDescription] = useState("")
  const [email, setEmail] = useState("")

  let musicianObj = {
    artistName, 
    trackName, 
    trackDescription, 
    email
  }

  function handleArtistChange(e){
    // console.log(e.target.value)
    setArtistName(e.target.value)
    // console.log(artistName)
  }

  function handleSongChange(e){
    // console.log(e.target.value)
    setTrackName(e.target.value)
    // console.log(trackName)
    
  }

  function handleDescriptionChange(e){
    // console.log(e.target.value)
    setTrackDescription(e.target.value)
    // console.log(trackDescription)
  }

  function handleEmailChange(e){
    // console.log(e.target.value)
    setEmail(e.target.value)
    // console.log(email)
  }

const handleSubmit = (e) => {
  e.preventDefault()
  if (artistName === "" || trackName === "" || trackDescription === "" || email === "") {
    console.log("Input field is blank")
    return
  }
  axios.post('https://sheet.best/api/sheets/4d70ea5e-6e55-4c7a-9947-7d10ec2ef460', musicianObj)
  .then(response => {
    if (response.status === 200) {
      console.log("POST request successful", musicianObj)
      dispatch(changeUser("musician"))
      getModal().showModal()
      e.target.reset()
      setArtistName('')
      setTrackName('')
      setTrackDescription('')
      setEmail('')
    } else {
      console.log("POST request failed")
    }
  })
  .catch(error => {
    console.log('Error occurred during POST request:', error)
  })
}

  return (
    <div className="artist-form-containter">
        <h2>Share your music, globally</h2>
        <form className="musician-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="name-label">Artist Name</label>
              <input type="text" name="artist_name" className="user-input" onChange={handleArtistChange}/>
            </div>
            <div className="input-container">
              <label className="name-label">Song Name</label>
              <input type="text" name="song_name" className="user-input" onChange={handleSongChange}/>
            </div>
            <div className="input-container">
              <label className="name-label">Description</label>
              <textarea type="text" name="description" className="user-input" id="song-description" onChange={handleDescriptionChange}/>
            </div>
            <div className="input-container">
              <label className="name-label">Email</label>
              <input type="text-box" name="artist_email" className="user-input" onChange={handleEmailChange}/>
            </div>
          <button type="submit" className="submit-button" >Submit</button>
        </form>
    </div>
  )
}

export default Musician
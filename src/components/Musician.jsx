import React, { useState } from 'react'
import axios from 'axios';

const Musician = () => {

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
    console.log(e.target.value)
    setArtistName(e.target.value)
    console.log(artistName)
  }

  function handleSongChange(e){
    console.log(e.target.value)
    setTrackName(e.target.value)
    console.log(trackName)
    
  }

  function handleDescriptionChange(e){
    console.log(e.target.value)
    setTrackDescription(e.target.value)
    console.log(trackDescription)
  }

  function handleEmailChange(e){
    console.log(e.target.value)
    setEmail(e.target.value)
    console.log(email)
  }


  function sendClick(e){
    console.log("Hi from Submit")
    console.log(musicianObj)

    axios.post('https://sheet.best/api/sheets/4d70ea5e-6e55-4c7a-9947-7d10ec2ef460', musicianObj)
    .then(response => {
      console.log(response);
    })

    setArtistName('')
    setTrackName('')
    setTrackDescription('')
    setEmail('')
}




  return (
    <div className="artist-form-containter">
        <h2>Share your music, globally</h2>
        <form className="musician-form">
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
        </form>
        <button className="submit-button" onClick={sendClick}>Submit</button>
    </div>
  )
}

export default Musician
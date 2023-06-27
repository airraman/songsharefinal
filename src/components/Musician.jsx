const Musician = () => {
  return (
    <div className="artist-form-containter">
        <h2>Share your music, globally</h2>
        <form className="musician-form">
            <div className="input-container">
              <label className="name-label">Artist Name</label>
              <input type="text" name="artist_name" className="user-input"/>
            </div>
            <div className="input-container">
              <label className="name-label">Song Name</label>
              <input type="text" name="song_name" className="user-input"/>
            </div>
            <div className="input-container">
              <label className="name-label">Description</label>
              <textarea type="text" name="description" className="user-input" id="song-description"/>
            </div>
            <div className="input-container">
              <label className="name-label">Email</label>
              <input type="text-box" name="artist_email" className="user-input"/>
            </div>
        </form>
        <button className="submit-button">Submit</button>
    </div>
  )
}

export default Musician
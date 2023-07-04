import { useSelector } from "react-redux"

const Modal = () =>  {

  const user = useSelector((state) => state.userSelect.value)
  const getModal = () => {
    const modal = document.querySelector(".submit-modal")
    return modal
  }

  const closeModal = () => {
    getModal().close()
  }

  console.log(user)
  return (
    <div className="modal-content">
        {user === "listener" ? <h2>Thanks for subscribing!</h2> : <h2>Thanks for your submission!</h2>}
        Be sure to check out our playlist of the week!<br/><br/>
        <div className="playlist-container">
          <div className="left-arrow"></div>
          <a href="https://open.spotify.com/playlist/6U6Z8OWN4E49g4Mn0lXA4g?si=240908436c88468b" target="_blank"><img src="/playlistsymbol.png"/></a>
          <div className="right-arrow"></div>
        </div>
        <button className="button" onClick={closeModal}>close</button>
    </div>
  )
}

export default Modal
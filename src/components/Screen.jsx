import { useEffect, useState } from "react"
import Papa from "papaparse"
import About from "./About"
import Listener from "./Listener"
import Musician from "./Musician"
import SongList from "./SongList"

const Screen = () => {

  const [screenFocus, setScreenFocus] = useState("listener")

  const userSelection = (selection) => {
    setScreenFocus(selection)
  }

  const [songList, setSongList] = useState([])
  
  useEffect(() => {
    const getSongList = () => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSHz5TKUkUDs4AfmJ7QU_pGgrlIi8Pmz3L5fQF1osDmTa4z_8EnbPMymySBmSZamLmoBYRAH0HC8mSi/pub?output=csv", {
            download: true, 
            header: true,
            complete: (result) => {
                setSongList(result.data)
            }
        })
    }

    getSongList()
  },[])

  return (
    <div className="screen-container">
      <div className="screen-content">
        <div className="left-screen-content">
          <div className='app-title'>songshare.io</div>
          <div>
            <div className={screenFocus === "listener" ? "active-tab" : "user-selection"} onClick={() => userSelection("listener")}>
              <div>Listener</div> <span>{`>`}</span>
            </div>
            <div className={screenFocus === "musician" ? "active-tab" : "user-selection"} onClick={() => userSelection("musician")}>
              <div>Musician</div> <span>{`>`}</span>
            </div>
            <div className={screenFocus === "about" ? "active-tab" : "user-selection"} onClick={() => userSelection("about")}>
              <div>About</div> <span>{`>`}</span>
            </div>
            <div className={screenFocus === "song_list" ? "active-tab" : "user-selection"} onClick={() => userSelection("song_list")}>
              <div>Song List</div> <span>{`>`}</span>
            </div>
          </div>
         
        </div>
        <div className="right-screen-content">
          {screenFocus === "listener" && <Listener /> }
          {screenFocus === "musician" && <Musician />}
          {screenFocus === "about" && <About />}
          {screenFocus === "song_list" && <SongList songList={songList}/>}
        </div>
      </div>
      
    </div>
  )
}

export default Screen
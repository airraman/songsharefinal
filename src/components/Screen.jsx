import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { confirmOption } from "../features/confirmSelect"
import Papa from "papaparse"
import About from "./About"
import Listener from "./Listener"
import Musician from "./Musician"
import SongList from "./SongList"

const Screen = () => {

  const dispatch = useDispatch()
  const testSelection = useSelector((state) => state.optionSelect.value)
  // console.log(testSelection)
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
            <div className={testSelection === "Listener" ? "active-tab" : "user-selection"} onClick={() => userSelection("listener")}>
              <div>Listener</div> <span>{`>`}</span>
            </div>
            <div className={testSelection === "Musician" ? "active-tab" : "user-selection"} onClick={() => userSelection("musician")}>
              <div>Musician</div> <span>{`>`}</span>
            </div>
            <div className={testSelection === "About" ? "active-tab" : "user-selection"} onClick={() => userSelection("about")}>
              <div>About</div> <span>{`>`}</span>
            </div>
            <div className={testSelection === "SongList" ? "active-tab" : "user-selection"} onClick={() => userSelection("song_list")}>
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
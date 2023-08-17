import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { confirmOption } from "../features/confirmSelect"
import { changeOption } from "../features/optionSelect"
import Papa from "papaparse"
import About from "./About"
import Listener from "./Listener"
import Musician from "./Musician"
import SongList from "./SongList"

const Screen = () => {

  const dispatch = useDispatch()
  const optionSelection = useSelector((state) => state.optionSelect.value)
  const screenFocus = useSelector((state) => state.confirmSelect.value)
  
  const userSelection = (selection) => {
    dispatch(confirmOption(selection))
    dispatch(changeOption(selection))
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
            <div className={optionSelection === "Listener" ? "active-tab" : "user-selection"} onClick={() => userSelection("Listener")}>
              <div>Listener</div> <span>{`>`}</span>
            </div>
            <div className={optionSelection === "Musician" ? "active-tab" : "user-selection"} onClick={() => userSelection("Musician")}>
              <div>Musician</div> <span>{`>`}</span>
            </div>
            <div className={optionSelection === "About" ? "active-tab" : "user-selection"} onClick={() => userSelection("About")}>
              <div>About</div> <span>{`>`}</span>
            </div>
            <div className={optionSelection === "SongList" ? "active-tab" : "user-selection"} onClick={() => userSelection("SongList")}>
              <div>Song List</div> <span>{`>`}</span>
            </div>
          </div>

          <div className="logo-container">
            <img src="/SongshareLogo.jpeg" className="logo"/>
          </div>
         
        </div>
        <div className="right-screen-content">
          {screenFocus === "Listener" && <Listener /> }
          {screenFocus === "Musician" && <Musician />}
          {screenFocus === "About" && <About />}
          {screenFocus === "SongList" && <SongList songList={songList}/>}
        </div>
      </div>
      
    </div>
  )
}

export default Screen
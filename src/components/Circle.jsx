import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeOption } from "../features/optionSelect"
import { confirmOption } from "../features/confirmSelect"

const Circle = () => {

  const dispatch = useDispatch()
  const selection = useSelector((state) => state.optionSelect.value)
  const mainCircle = useRef(null);
  const [moveActive, setMoveActive] = useState(false)
  let optionList = ["Listener", "Musician", "About", "SongList"]

  const handleTouchMove = (e) => {
    setMoveActive(true)
    let touch = e.touches[0];
    let x = touch.clientX - mainCircle.current.getBoundingClientRect().left;
    let y = touch.clientY - mainCircle.current.getBoundingClientRect().top;


    if (x < mainCircle.current.offsetWidth / 2) {
      if (y < mainCircle.current.offsetHeight / 2) {
        dispatch(changeOption(optionList[0]))
      } else {
        dispatch(changeOption(optionList[3]))
      }
    } else {
      if (y < mainCircle.current.offsetHeight / 2) {
        dispatch(changeOption(optionList[1]))
      } else {
        dispatch(changeOption(optionList[2]))
      }
    }
  }
 
  const handleSelection = () => {
    console.log("Selected Index", selection)
    dispatch(confirmOption(selection))
  }

  return (
    <div className="circle-container">
      <div className={`main-circle ${moveActive ? "active" : ""}`} ref={mainCircle} onTouchMove={handleTouchMove} onTouchEnd={() => setMoveActive(false)}>
        <div className="quadrant" id="quadrant1"></div>
        <div className="quadrant" id="quadrant2"></div>
        <div className="quadrant" id="quadrant3"></div>
        <div className="quadrant" id="quadrant4"></div>
        <div className="inner-circle" onClick={handleSelection}></div>
      </div>
    </div>
  )
}

export default Circle
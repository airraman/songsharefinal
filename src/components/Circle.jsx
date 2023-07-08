import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeOption } from "../features/optionSelect"
import { confirmOption } from "../features/confirmSelect"

const Circle = () => {

  const dispatch = useDispatch()
  const testSelection = useSelector((state) => state.optionSelect.value)
  const [cursorPos, setCursorPos] = useState({})
  const [index, setIndex] = useState(0)
  const [startY, setStartY] = useState(null)
  let testList = ["Listener", "Musician", "About", "SongList"]
  // let index = 0
  const handleCursorMove = (e) => {
    if (startY === null) return
    
    
    let xPos = e.touches[0].clientX
    let yPos = e.touches[0].clientY
    const deltaY = e.touches[0].clientY - startY
    const sensitivity = 5

    if (deltaY > sensitivity) {
      // Scroll down (counter-clockwise)
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      dispatch(changeOption(testList[index]))
    } else if (deltaY < -sensitivity) {
      // Scroll up (clockwise)
      setIndex((prevIndex) => Math.min(prevIndex + 1, testList.length - 1));
      dispatch(changeOption(testList[index]))
    }
    console.log(testSelection)
  }

  const handleTouch = (e) => {
    const touch = e.touches[0].clientY
    // dispatch(changeOption(""))
    setStartY(touch)
  }

  const handleTouchEnd = () => {
    setStartY(null)
  }
 
  const handleSelection = () => {
    console.log("Selected Index", testSelection)
    dispatch(confirmOption(testSelection))
  }
  return (
    <div className="circle-container">
      <div className="main-circle" onTouchStart={handleTouch} onTouchMove={handleCursorMove} onTouchEnd={handleTouchEnd}>
        <div className="inner-circle" onClick={handleSelection}>

        </div>
      </div>
    </div>
  )
}

export default Circle
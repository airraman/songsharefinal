import { useState, useEffect } from "react"

const Circle = () => {

  const [cursorPos, setCursorPos] = useState({})
  const [index, setIndex] = useState(0)
  const [startY, setStartY] = useState(0)
  let testList = ["Listener", "Musician", "About", "Song List"]
  // let index = 0
  const handleCursorMove = (e) => {
    console.log(testList[index])
    setCursorPos({ x: e.touches[0].clientX, y: e.touches[0].clientY})
    
    let xPos = e.touches[0].clientX
    let yPos = e.touches[0].clientY
    const deltaY = yPos - startY

    if (deltaY > 0) {
      // Scroll Down
      if (index < testList.length - 1) {
        setIndex(index + 1);
      }
    } else if (deltaY < 0) {
      // Scroll Up
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  }

  const handleTouch = (e) => {
    const touch = e.touches[0].clientY
    setStartY(touch)
  }
 
  const handleSelection = () => {
    console.log("Selected Index", testList[index])
  }
  return (
    <div className="circle-container">
      <div className="main-circle" onTouchStart={handleTouch} onTouchMove={handleCursorMove}>
        <div className="inner-circle" onClick={handleSelection}>

        </div>
      </div>
    </div>
  )
}

export default Circle
import React, { useEffect, useState } from 'react'
import "./cursor.scss";
function Cursor() {

const [cursorPositionX, setCursorPositionX] = useState();
const [cursorPositionY, setCursorPositionY] = useState();

useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
        setCursorPositionX(`${e.pageX-3}px`)
        setCursorPositionY(`${e.pageY-3}px`)
    })
})
   


  return (
    <div style={{top:cursorPositionY, left:cursorPositionX}} className='cursor1'></div>
  )
}

export default Cursor
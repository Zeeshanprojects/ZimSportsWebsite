import React from 'react'
import '../assets/CSS/Preloader.css'
export default function Preloader() {
  return (
   <>
   <div className="preloader-wrapper">
      <div className="spinner">
        <div className=".outer-ringr"></div>
        <div className="layer black-layer"></div>
        <div className="layer gray-layer"></div>
      </div>
    </div>
   </>
  )
}

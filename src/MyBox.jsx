import React, { useState } from 'react'

const MyBox = () => {
    const [act,setAct]=useState(false)
  return (
      <div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    <div className={`box ${act? "box-close" : ""}`}>MyBox</div>
    </div>
  )
}

export default MyBox
import React from 'react'
import './Process.css'

export default function Process(props) {
  return (
    <div className='process'>
        <img src={props.img} alt='process-img'></img>
        <p className='step-title'>{props.title}</p>
        <p className='step-desc'>{props.desc}</p>
        <p className='step'>STEP {props.num}</p>
    </div>
  )
}

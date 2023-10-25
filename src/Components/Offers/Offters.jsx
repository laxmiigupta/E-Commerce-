import React from 'react'
import './Offters.css'
import exclusive_image  from '../Assets/exclusive_image.png'

export default function Offters() {
  return (
    <div className='offters'>
        <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offter for you </h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>Check now</button>
        </div>
        <div className="offers-right">
        <img src={exclusive_image } alt="" />
        </div>
    </div>
  )
}

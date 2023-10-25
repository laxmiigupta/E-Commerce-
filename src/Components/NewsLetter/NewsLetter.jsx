import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive offters on your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

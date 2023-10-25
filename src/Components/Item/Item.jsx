import React from 'react'

export default function Item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
    <div className="item-prices">
        <div className="item-pric-new">
    {props.new_price}
        </div>
        <div className="item-pric-old">
        {props.old_price}
        </div>
    </div>
    </div>
  )
}

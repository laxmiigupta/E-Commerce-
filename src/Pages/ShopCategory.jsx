import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContextProvider'

export default function ShopCategory(props) {
  const all_product = useContext(ShopContext);
  console.log(all_product);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

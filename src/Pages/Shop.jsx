import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offters from '../Components/Offers/Offters'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offters/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

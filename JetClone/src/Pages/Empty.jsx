import React from 'react'
import Start from '../components/Empty/StartPart/Start'
import MiddleText from '../components/Empty/MiddleText/Text'
import Carousel from '../components/Empty/TextCarousel/Carousel'
import Between from '../components/Empty/BetContainer/Between'
import EndText from '../components/Empty/MiddleText/EndText'
const Empty = () => {
  return (
    <div>
      <Start/>
      <MiddleText/>
      <Carousel/>
      <Between/>
      <EndText/>
    </div>
  )
}

export default Empty
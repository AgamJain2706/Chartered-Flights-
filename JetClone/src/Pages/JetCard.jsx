import React from 'react'
import Top1 from '../components/JetCard/Top1'
import TextCredit from '../components/JetCard/TextCredit'
import Cardbox from '../components/JetCard/Cardbox'
import Bottom from '../components/JetCard/Bottom'
const cards = [
  {
    Image: "https://charterjetone.com/wp-content/uploads/2016/02/image21.jpg",
    title: "Simple straightforward transparent pricing.",
    description: "We are 100% transparent in our pricing:",
    keypoint1: "Receive your own CJ1 Aviation Pro to handle your account personally 24/7.",
    keypoint2: "Enjoy access to over 5000 private jets.",
   
  },
  {
    Image: "https://charterjetone.com/wp-content/uploads/2016/02/image27.jpg",
    title: "CJ1 Personal Concierge assistant provides assistance in every aspect of you’re travel experience during your Jet Card membership.",
    description: "We are 100% transparent in our pricing:",
    keypoint1: "Free upgrades based on availability at all times (365)days a year.",
    keypoint2: "Minimum $50,000 membership.",
   
  },
  {
    Image: "https://charterjetone.com/wp-content/uploads/2016/02/image6.jpg",
    title: "The Charter Jet One Promise To our Jet Family.",
    description: "At Charter Jet One we never limit you to one type of Category or size of Jet Aircraft.",
    keypoint1: "Receive your own CJ1 Aviation Pro to handle your account personally 24/7.",
    keypoint2: "Enjoy access to over 5000 private jets.",
  },
]
const JetCard = () => {
  return (
    <div>
      <Top1 />
      <TextCredit />
      <div className='grid grid-flow-row   '>
        {cards.map((item, index) => (
          <Cardbox  cards = {item} key={index} />
        ))}
      </div>
      <Bottom/>
    </div>
  )
}

export default JetCard
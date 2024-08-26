import React from 'react'
import SameTop from '../components/AboutUs/SameTop'
import Textarea from '../components/AboutUs/Textarea'
import Card from '../components/AboutUs/Card'
const Data = [
  {
    Image:"https://charterjetone.com/wp-content/uploads/2016/02/mage3.jpg",
    title:"Price Pledge to our Private Jet Charter Clients",
    description:"We are 100% transparent in our pricing:",
    keypoint1:"No additional fuel surcharges",
    keypoint2:"No billed taxi time",
    keypoint3:"No surprise landing fees or ramp fees",
    keypoint4:"No additional overnight charges"
  },
  {
    Image:"https://charterjetone.com/wp-content/uploads/2016/02/image2.jpg",
    title:"Charter Jet One Benefits",
    description:"Only 4-hours’ notice required for all of your travel arrangements",
    keypoint1:"20-30% savings when compared to programs",
    keypoint2:"No billed taxi time",
    keypoint3:"Access to more than 5,000 aircraft and helicopters",
    keypoint4:"No additional overnight charges"
  },
  {
    Image:"https://charterjetone.com/wp-content/uploads/2016/02/image4.jpg",
    title:"Now offering Phenomenal Empty Leg Flights‎",
    description:"Empty legs are flights returning to their point of origin upon completion flight.",
    keypoint1:"No additional fuel surcharges",
    keypoint2:"No billed taxi time",
    keypoint3:"No surprise landing fees or ramp fees",
    keypoint4:"No additional overnight charges"
  },
]
const About = () => {
  return (
    <div>
      <SameTop/>
      <Textarea/>
      <section className='grid grid-flow-row px-7 pb-8 lg:px-20 '>
        {
          Data.map((item,index)=>(
            <Card Data={item} key={index} />
          ))}
      </section>
    </div>
  )
}

export default About
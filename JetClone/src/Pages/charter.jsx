import React from 'react'
import StartImg from '../components/CharterFlights/TopImg/StartImg'
import Middle from '../components/CharterFlights/MiddleContent/Middle'
import UserService from '../components/CharterFlights/CharterServices/UserService'
import Last from '../components/CharterFlights/LastArea/Last'

const charter = () => {

  return (
    <div>
      <StartImg />
      <Middle />
      <UserService />
      <Last />
    </div>
  )
}

export default charter
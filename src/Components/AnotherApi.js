import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export const AnotherApi = () => {

    const fetchData = () => {

    }

  return (
    <>
        <input type="text" placeholder='Ex. Pedro...' />
        <button onClick={fetchData}>Predict Age</button>
        <h1>the age is: </h1>
    </>
  )
}

export default AnotherApi
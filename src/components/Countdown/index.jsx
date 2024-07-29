/* eslint-disable quotes */
// Countdown.js
import React, { useEffect, useState } from 'react'

const Countdown = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    if (time === 0) return

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    // Clear the interval on component unmount
    return () => clearInterval(timerId)
  }, [time])

  // Function to format time as m:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <span>
      <span>{formatTime(time)}</span>
    </span>
  )
}

export default Countdown

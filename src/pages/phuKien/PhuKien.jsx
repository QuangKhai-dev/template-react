import React from 'react'
import { useLocation } from 'react-router-dom'

const PhuKien = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <div>PhuKien</div>
  )
}

export default PhuKien
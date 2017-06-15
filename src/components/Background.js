import React from 'react'
import kitchen from '../svg/kitchen.svg'
import '../styles/background.css'

class Background extends React.Component {
  render() {
    return (
      <img src={kitchen} className="background" alt="background" />
    )
  }
}

export default Background

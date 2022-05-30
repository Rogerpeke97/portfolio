import React from 'react'
import Particles from '../particleScenes/Particles'

const BubblesBackgroundContainer = ({ children, className="", particlesColor="blue" }) => {
  return(
    <div className={`${className}`}>
      <Particles colorParticles={particlesColor} />
      { React.Children.map(children, (child) =>
          React.cloneElement(child, { className: `${(child.props.className || '')} relative` })
        )
      }
    </div>
  )
}


export default BubblesBackgroundContainer
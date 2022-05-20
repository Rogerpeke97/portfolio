import React, { useRef } from 'react'
import Particles from '../particleScenes/Particles'

const BubblesBackgroundContainer = ({ children }) => {
  const bubblesWrapper = useRef('')

  return(
    <div className="h-100 w-full" ref={bubblesWrapper}>
      <Particles div={bubblesWrapper} colorParticles={'blue'} />
      { React.Children.map(children, (child) =>
          React.cloneElement(child, { className: child.props.className + ' absolute' })
        )
      }
    </div>
  )
}


export default BubblesBackgroundContainer
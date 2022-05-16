import React, { useRef } from 'react'
import Particles from '../particleScenes/Particles'

const BubblesBackgroundContainer = ({ children }) => {
  const bubblesWrapper = useRef('')

  return(
    <div className="h-full w-full" ref={bubblesWrapper}>
      <Particles div={bubblesWrapper} colorParticles={'blue'} />
      {children}
    </div>
  )
}


export default BubblesBackgroundContainer
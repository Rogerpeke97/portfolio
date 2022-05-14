import React, { useEffect, useRef, useState } from 'react'
import Particles from '../particleScenes/Particles'

const BubblesBackgroundContainer = ({ children }) => {
  const bubblesWrapper = useRef('')

  return(
    <div className="h-100 max-w-[500px]" ref={bubblesWrapper}>
      <Particles div={bubblesWrapper} colorParticles={'blue'} />
      {children}
    </div>
  )
}


export default BubblesBackgroundContainer
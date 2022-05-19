import React, { useRef } from 'react'
import Particles from '../particleScenes/Particles'

const BubblesBackgroundContainer = ({ children }) => {
  const bubblesWrapper = useRef('')

  // useEffect(() => {
  //   console.log(children)
  // }, [])
  // const TestComponent = () => {
  //   return (
  //     <div className="dudu">
  //       <div>asdasda</div>
  //     </div>
  //   )
  // }

  return(
    <div className="h-100 w-full" ref={bubblesWrapper}>
      <Particles div={bubblesWrapper} colorParticles={'blue'} />
      <div className="absolute h-full w-full">
        {children}
      </div>
    </div>
  )
}


export default BubblesBackgroundContainer
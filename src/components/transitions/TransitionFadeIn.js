import React, { useEffect, useState, useRef } from 'react'

const TransitionFadeIn = ({ children, delayMs=0, className="", direction="up" }) => {
  const [loadedOnce, setLoadedOnce] = useState(false)

  const transitionContainer = useRef(0)

  const [startAnimation, setStartAnimation] = useState(false)

  const checkForAnimationStart = (e) => {
    const transitionContainerPosition = transitionContainer.current.getBoundingClientRect()
    const THRESHOLD_TO_DISPLAY = 400
    if(transitionContainerPosition.y < THRESHOLD_TO_DISPLAY && !loadedOnce) {
      setTimeout(() => {
        setStartAnimation(true)
        setLoadedOnce(true)
      }, delayMs)
    }
  }

  const transitionAxis = () => {
    if(direction === 'up') {
      return 'fade-in-up'
    }
    if(direction === 'down') {
      return 'fade-in-down'
    }
    if(direction === 'left') {
      return 'fade-in-left'
    }
    if(direction === 'right') {
      return 'fade-in-right'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkForAnimationStart)
    return () => {
      window.removeEventListener('scroll', checkForAnimationStart)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={transitionContainer} className={`${startAnimation ? transitionAxis() : 'invisible'} ${className}`}>
      {children}
    </div>
  )
}


export default TransitionFadeIn
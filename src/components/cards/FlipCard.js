import React, { useRef, useEffect } from "react"

const FlipCard = ({ children, className }) => {
  const frontCard = useRef('')
  const backCard = useRef('')

  const flipCard = () => {
    frontCard.current.style.transform = ["rotateY(180deg)", ""].includes(frontCard.current.style.transform) || "" ? "rotateY(0deg)" : "rotateY(180deg)"
		backCard.current.style.transform = ["rotateY(0deg)", ""].includes(backCard.current.style.transform) ? "rotateY(180deg)" : "rotateY(0deg)"
		frontCard.current.style.zIndex = ["0", ""].includes(frontCard.current.style.zIndex) ? "1" : "0"
		backCard.current.style.zIndex = ["1", ""].includes(frontCard.current.style.zIndex) ? "0" : "1" 
  }

  return(
    <div className={`${className} flex relative w-full rounded-md`}>
      { React.Children.map(children, (child, index) => {
            const cardRef = index === 0 ? frontCard : backCard
            return React.cloneElement(child, { ref: cardRef, onClick: flipCard })
          }
        )
      }
    </div>
  )
}

export default FlipCard
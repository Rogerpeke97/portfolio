import React, { useRef, useState } from "react"


const FlipCard = ({ children, className, cardsText={front: 'Flip', back: 'Flip'}, setCurrentCard, activator }) => {
  const frontCard = useRef('')
  const backCard = useRef('')
  const [card, setCard] = useState('front')

  const flipCard = () => {
    const isFrontCardFlipped = frontCard.current.style.transform === 'rotateY(180deg)'
    frontCard.current.style.transform = isFrontCardFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'
    backCard.current.style.transform = isFrontCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
		frontCard.current.style.zIndex = isFrontCardFlipped ? '1' : '0'
		backCard.current.style.zIndex = isFrontCardFlipped ? '0' : '1'
    const currentCard = card === 'front' ? 'back' : 'front'
    setCard(currentCard) 
    setCurrentCard(currentCard)
  }

  return(
    <div className={`${className} flex relative p-2 overflow-hidden w-full rounded-md`}>
      { React.Children.map(children, (child, index) => {
            if(index > 1) return
            const isFrontCard = index === 0
            const cardRef = isFrontCard ? frontCard : backCard
            const currentCardRotation = isFrontCard ? 'rotateY(0deg)' : 'rotateY(180deg)'
            return React.cloneElement(child, 
              { ref: cardRef, style: { zIndex: isFrontCard ? '1' : '0', transform: currentCardRotation }, 
              className: `${child.props.className} ${isFrontCard ? 'relative' : 'absolute'} transition ease-out duration-300` }
            )
          }
        )
      }
      {
       React.Children.map(activator, (child) => React.cloneElement(child, { 
         ButtonText: cardsText[card], onClick: flipCard, className: child.props.className + ' absolute inset-x-0 mx-auto bottom-0 z-10'
        }))
      }
      <div className="absolute bg-primary inset-0 h-full"></div>
    </div>
  )
}

export default FlipCard
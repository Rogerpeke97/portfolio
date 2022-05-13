import React from 'react';
import TechnologyBox from './TechnologyBox';

const Welcome = ({ className = '', transparentOverlay, mouseMove }) => {
  const messageWelcome = "Ignacio Diaz".split("")

  const frameworksAndApi = [
    { imageSource: 'languages-frameworks/svgs/react.svg', alt: 'React' },
    { imageSource: 'languages-frameworks/svgs/vue.svg', alt: 'Vue' },
    { imageSource: 'languages-frameworks/svgs/vuetify.svg', alt: 'Vuetify' },
    { imageSource: 'languages-frameworks/svgs/webgl.svg', alt: 'Webgl' },
  ]

  const languages = [
    { imageSource: 'languages-frameworks/svgs/c++.svg', alt: 'C++' },
    { imageSource: 'languages-frameworks/svgs/java.svg', alt: 'Java' },
    { imageSource: 'languages-frameworks/svgs/javascript.svg', alt: 'Javascript' },
  ]

  return (
    <div className={`flex flex-col flex-wrap absolute justify-center h-full ${className}`} ref={transparentOverlay} onMouseMove={(e) => mouseMove(e)}>
      <div className="grid h-full items-center">
        <div className="flex justify-center h-20">
          {messageWelcome.map((letter, index) => {
            return <h1 className="text-7xl smAndDown:text-5xl font-teko px-1" key={index}>{letter}</h1>
          })}
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className="text-5xl smAndDown:text-3xl px-1 bold underline font-teko">
            Languages:
          </h1>
          <div className="flex items-center">
            {languages.map((language, index) => {
              return <TechnologyBox className="mx-2 pa-1" key={index} imageSource={language.imageSource} alt={language.alt} />
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className="text-5xl smAndDown:text-3xl px-1 bold underline font-teko">
            Frameworks / API:
          </h1>
          <div className="flex items-center">
            {frameworksAndApi.map((language, index) => {
              return <TechnologyBox className="mx-2 pa-1" key={index} imageSource={language.imageSource} alt={language.alt} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
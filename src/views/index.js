import React from 'react';
import NavBar from '../components/NavBar.js'
import Projects from '../components/index/Projects.js'
import Footer from '../components/Footer';
import WavesAndWelcome from '../components/threeJsScenes/WavesAndWelcome';
import BubblesBackgroundContainer from '../components/threeJsScenes/BubblesBackgroundContainer';
import TransitionFadeIn from '../components/transitions/TransitionFadeIn.js';

function Index() {
  const welcomeMessage = 'Get in touch!'.split("")

	return (
		<>
			<NavBar />
      <WavesAndWelcome />
      <TransitionFadeIn direction="right">
        <BubblesBackgroundContainer>
          <div className="w-full h-full my-2">
            <Projects />
          </div>
        </BubblesBackgroundContainer>
      </TransitionFadeIn>
      <TransitionFadeIn direction="left">
        <BubblesBackgroundContainer className="h-100" particlesColor="white">
          <div className="pt-28 flex flex-col items-center">
            <div className="flex justify-center items-center">
              {welcomeMessage.map((letter, index) => {
                return <h1 key={index} style={{ '--i': index }} className="animate-text text-6xl text-secondary font-bold pl-1 font-teko underline">{letter}</h1>
              })}
            </div>
            <p style={{lineHeight: "1.6"}} className="p-2 pt-10 font-bold">Contact me through LinkedIn, my e-mail or use the form down below!</p>
          </div>
        </BubblesBackgroundContainer>
      </TransitionFadeIn>
      <TransitionFadeIn>
        <Footer />
      </TransitionFadeIn>
		</>
	)
}
export default Index;
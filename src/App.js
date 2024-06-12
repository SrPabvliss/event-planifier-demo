import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import PreviousEvents from './components/PreviousEvents';
import Invitation from './components/Invitation';
import './App.css';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const AppContainer = styled.div`
  background-color: #121212; /* Fondo oscuro */
  color: white;
  scroll-behavior: smooth;
`;

const App = () => {
  const main = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top ',
        pin: true,
        pinSpacing: false,
        end: () => `+=${section.clientHeight}`,
        snap: 1 / (sections.length + 2),
        id: `section-${index + 1}`,
      });
    });


    gsap.utils.toArray('.event-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'bottom 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        }
      });
    });
  }, { scope: main });

  return (
    <AppContainer ref={main}>
      <Header />
      <div className='section'>
        <Hero />
      </div>
      <Offers />
        <PreviousEvents /> 
        <Invitation />
      <Footer />
    </AppContainer>
  );
};

export default App;

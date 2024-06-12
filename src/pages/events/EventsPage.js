import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import EventsHero from '../components/EventsHero';
import { useGSAP } from '@gsap/react';
import PreviousEvents from '../../components/PreviousEvents';
import Offers from '../../components/Offers';
import PreviousWeddingEvents from './PreviousWeddingEvent';
import Header from '../../components/Header';
import Invitation from '../../components/Invitation';
import Reasons from '../components/Reasons';

gsap.registerPlugin(ScrollTrigger);

export const AppContainer = styled.div`
  background-color: #121212; /* Fondo oscuro */
  color: white;
  scroll-behavior: smooth;
`;

const EventsPage = () => {
  const eventRef = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top',
        pin: true,
        pinSpacing: false,
        end: () => `+=${section.clientHeight}`,
        snap: 1 / (sections.length + 2),
        id: `section-${index + 1}`,
      });
    });
  }, { scope: eventRef });

  return (
    <AppContainer>
      <Header/>
      <EventsHero />
    <PreviousWeddingEvents />
    <Reasons/>
  </AppContainer>
  );
};

export default EventsPage;

import React from 'react';
import styled from '@emotion/styled';

const HeroSection = styled.section`
  background: url('https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #2563eb;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #1d4ed8;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle>Organización de Eventos Inolvidables</HeroTitle>
      <HeroDescription>Transforma tus momentos especiales en recuerdos eternos con nuestros servicios profesionales de organización de eventos.</HeroDescription>
      <HeroButton href="#offers">Descubre Nuestras Ofertas</HeroButton>
    </HeroContent>
  </HeroSection>
);

export default Hero;

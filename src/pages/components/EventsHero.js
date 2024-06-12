import React from 'react';
import styled from '@emotion/styled';

const HeroData = [
  {
    title: "La mejor experiencia de tu vida",
    description: "BODAS, CELEBRACIONES Y MÁS",
    image: "https://www.theknotww.com/wp-content/uploads/2019/02/Bodas_hero1.png"
  }
];

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url('${props => props.image}');
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  color: white;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
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

const EventsHero = () => (
  <>
    {HeroData.map((hero) => (
      <HeroSection key={hero.title} image={hero.image}>
        <HeroContent>
          <HeroTitle>{hero.title}</HeroTitle>
          <HeroDescription>{hero.description}</HeroDescription>
          <HeroButton href="#offers">Descubre Nuestras Ofertas</HeroButton>
        </HeroContent>
      </HeroSection>
    ))}
  </>
);

export default EventsHero;

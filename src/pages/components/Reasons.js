import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: #f44336; /* Rojo */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ReasonsList = styled.ul`
  list-style-type: none;
  padding: 30;
  text-align: left;
`;

const ReasonItem = styled.li`
  font-size: 1.3rem;
  margin-bottom: 15px;
  position: relative;
  padding-left: 20px;
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ffeb3b; /* Amarillo */
    font-size: 1.8rem;
    line-height: 1;
  }
`;

const Reasons = () => (
  <Section>
    <Content>
      <Title>Razones para Utilizar Nuestro Servicio</Title>
      <Description>Descubre por qué somos la mejor opción para la organización de tus eventos:</Description>
      <ReasonsList>
        <ReasonItem>Experiencia y profesionalismo en la planificación de eventos especiales.</ReasonItem>
        <ReasonItem>Variedad de servicios adaptados a tus necesidades específicas.</ReasonItem>
        <ReasonItem>Atención personalizada y dedicación en cada detalle.</ReasonItem>
        <ReasonItem>Garantía de hacer de tu evento una experiencia inolvidable.</ReasonItem>
      </ReasonsList>
    </Content>
  </Section>
);

export default Reasons;

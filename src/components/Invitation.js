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
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: white;
  color: #f44336;
  border: 2px solid white;
  padding: 20px 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px;

  &:hover {
    background-color: #f44336;
    color: white;
    border: 2px solid white;
  }
`;

const Invitation = () => (
  <Section>
    <Content>
      <Title>Invitación a Trabajar Juntos</Title>
      <Description>¿Tienes una idea para un evento? ¡Nos encantaría ayudarte a hacerla realidad! Ponte en contacto con nosotros y empecemos a planificar juntos.</Description>
      <Button>Contáctanos</Button>
    </Content>
  </Section>
);

export default Invitation;

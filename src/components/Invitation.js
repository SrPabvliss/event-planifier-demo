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

const Invitation = () => (
  <Section>
    <Content>
      <Title>Invitación a Trabajar Juntos</Title>
      <Description>¿Tienes una idea para un evento? ¡Nos encantaría ayudarte a hacerla realidad! Ponte en contacto con nosotros y empecemos a planificar juntos.</Description>
    </Content>
  </Section>
);

export default Invitation;

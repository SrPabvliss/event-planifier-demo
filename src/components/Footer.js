import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SectionItem = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f44336;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterSection>
        <SectionTitle>Sobre Nosotros</SectionTitle>
        <SectionItem>Somos una empresa dedicada a la organización de eventos inolvidables.</SectionItem>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Contacto</SectionTitle>
        <SectionItem>Email: contacto@eventos.com</SectionItem>
        <SectionItem>Teléfono: +123 456 7890</SectionItem>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Síguenos</SectionTitle>
        <SocialMedia>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
        </SocialMedia>
      </FooterSection>
    </FooterContent>
  </FooterContainer>
);

export default Footer;

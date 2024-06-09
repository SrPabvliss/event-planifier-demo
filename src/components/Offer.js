import React from 'react';
import styled from '@emotion/styled';

const OfferContainer = styled.div`
  flex: 0 0 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const OfferImage = styled.div`
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

const OfferTitle = styled.h2`
  font-size: 2rem;
`;

const OfferDescription = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const OfferActions = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.a`
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

const Offer = ({ offer }) => (
  <OfferContainer style={{ backgroundColor: offer.bgColor, color: offer.textColor }} className='offer'>
    <OfferImage>
      <img src={offer.image} alt={offer.title} />
    </OfferImage>
    <div>
      <OfferTitle>{offer.title}</OfferTitle>
      <OfferDescription>{offer.description}</OfferDescription>
      <OfferActions>
        <Button href={offer.moreInfoLink}>Descubre Más</Button>
        <Button href={offer.contactLink}>Habla con Nosotros</Button>
      </OfferActions>
    </div>
  </OfferContainer>
);

export default Offer;

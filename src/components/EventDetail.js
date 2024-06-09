import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  color: #000000;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  padding: 20px;
`;

const Date = styled.p`
  font-size: 1.2rem;
  color: #555555;
  margin: 0;
  padding: 10px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  max-width: 1400px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Itinerary = styled.div`
  text-align: left;
  gap: 80px;
  display: flex;
  place-content: center;
  margin-bottom: 40px;
`;

const ItineraryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  place-content: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 20%;
  background-color: #CDCDCD	 ;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Time = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.3rem;
`;

const Detail = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: medium;
`;

const EventDetail = ({ event, backgroundColor }) => (
  <Section backgroundColor={backgroundColor} >
    <Title>{event.title}</Title>
    <Date>{event.date}</Date>
    <Gallery>
      {event.gallery.map((image, index) => (
        <Image key={index} src={image} alt={`Gallery image ${index + 1}`} />
      ))}
    </Gallery>
    <Subtitle>Itinerario del Evento</Subtitle>
    <Itinerary>
      {event.itinerary.map((item, index) => (
        <ItineraryItem key={index}>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rollercoaster" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675" />
              <path d="M20 9v12" />
              <path d="M8 21v-3" />
              <path d="M12 21v-10" />
              <path d="M16 9.5v11.5" />
              <path d="M15 3h5v3h-5z" />
              <path d="M6 8l4 -3l2 2.5l-4 3l-1.8 -.5z" />
            </svg></Icon>
          <div>
            <Time>{item.time}</Time>
            <Detail>{item.detail}</Detail>
          </div>
        </ItineraryItem>
      ))}
    </Itinerary>
  </Section>
);

export default EventDetail;

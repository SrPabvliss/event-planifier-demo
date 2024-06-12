import React, { useRef } from 'react';
import styled from '@emotion/styled/macro';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';





const EventContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  max-width: 100%;
  text-align: center;
  color: black;
`;

const EventTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 15px;
  color: black;
`;

const EventDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 20px;
  color: black;
`;

const EventGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const GalleryImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const EventItinerary = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  color: black;
  max-width: 800px;
  margin: 0 auto;
`;

const ItineraryItem = styled.p`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;




const WeddingEvent = ({ event, backgroundColor }) => {
  
  return (
    <EventContainer backgroundColor={backgroundColor} className='wedding' >
      <EventTitle>{event.title}</EventTitle>
      <EventDescription>{event.description}</EventDescription>
      <EventGallery>
        {event.gallery.map((image, index) => (
          <GalleryImage key={index} src={image} alt={`Gallery image ${index + 1}`} />
        ))}
      </EventGallery>
      <EventItinerary>
        {event.itinerary.map((item, index) => (
          <ItineraryItem key={index}>
            <strong>{item.time}</strong>: {item.detail}
          </ItineraryItem>
        ))}
      </EventItinerary>
    </EventContainer>
  );
};

export default WeddingEvent;

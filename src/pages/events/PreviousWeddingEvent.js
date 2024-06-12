import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    title: "Servicios que ofrecemos",
    description: "Ofrecemos una amplia gama de servicios para cubrir cada aspecto de tu boda, desde la planificación inicial hasta la ejecución final.",
    gallery: [
      "https://cdn0.matrimonios.cl/article-vendor/1766/3_2/960/jpg/img-7477_8_111766-163461423087128.jpeg",
      "https://cdn0.matrimonio.com.pe/article-real-wedding/350/3_2/960/jpg/109090.jpeg",
      "https://cdn0.bodas.com.mx/article-real-wedding/391/3_2/1280/jpg/990229.webp"
    ],
    itinerary: [
      { time: "Planificación completa", detail: "Nos encargamos de todos los detalles, desde la selección del lugar hasta la coordinación del día." },
      { time: "Decoración", detail: "Creamos ambientes únicos y personalizados para cada pareja." },
      { time: "Catering", detail: "Ofrecemos opciones de catering gourmet para satisfacer todos los gustos." }
    ]
  },
  {
    title: "Testimonios de clientes",
    description: "Nuestros clientes nos recomiendan por nuestra dedicación y atención a los detalles. Aquí algunos de sus comentarios:",
    gallery: [
      "https://vsd.mx/wp-content/uploads/2023/11/20211016-sj-371_5_180609-164072606291668.jpg",
      "https://cdn0.bodas.net/article-real-wedding/267/3_2/960/jpg/2297557.jpeg",
      "https://lamagiadecasarse.es/wp-content/uploads/2020/07/candlelit-toronto-wedding-airship-37-impossibly-dreamy-scarlett-oneill-28.jpg"
    ],
    itinerary: [
      { time: "Ana y Juan", detail: "“Nuestra boda fue mágica gracias a ustedes. ¡Todo fue perfecto!”" },
      { time: "María y Pedro", detail: "“El equipo hizo un trabajo increíble. Nos sentimos muy cuidados.”" },
      { time: "Laura y Carlos", detail: "“La atención al detalle y la profesionalidad fueron excepcionales.”" }
    ]
  }
];

const WeddingSection = styled.section`
  overflow: hidden;
  position: relative;
  height: 100vh;
  display: flex;
`;

const WeddingContainer = styled.div`
  min-width: 100vw;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Itinerary = styled.div`
  margin-top: 20px;
`;

const ItineraryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ItineraryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ItineraryItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const PreviousWeddingEvents = () => {
  const weddingRef = useRef();

  useGSAP(() => {
    const weddings = gsap.utils.toArray('.wedding');
    const weddingContainer = weddingRef.current;

    gsap.to(weddings, {
      xPercent: -100 * (weddings.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: weddingContainer,
        pin: true,
        scrub: 1,
        snap: 1 / (weddings.length - 1),
        end: () => `+=${weddingContainer.offsetWidth}`,
      }
    });
  }, { scope: weddingRef });

  return (
    <WeddingSection ref={weddingRef}>
      {eventsData.map((event, index) => (
        <WeddingContainer className="wedding" key={index}>
          <Title>{event.title}</Title>
          <Description>{event.description}</Description>
          <GalleryGrid>
            {event.gallery.map((image, idx) => (
              <GalleryImage key={idx} src={image} alt={`Gallery ${index}-${idx}`} />
            ))}
          </GalleryGrid>
          <Itinerary>
            <ItineraryTitle>Itinerario del Evento</ItineraryTitle>
            <ItineraryList>
              {event.itinerary.map((item, idx) => (
                <ItineraryItem key={idx}>
                  <strong>{item.time}:</strong> {item.detail}
                </ItineraryItem>
              ))}
            </ItineraryList>
          </Itinerary>
        </WeddingContainer>
      ))}
    </WeddingSection>
  );
};

export default PreviousWeddingEvents;

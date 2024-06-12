  import React, { useRef } from 'react';
  import styled from '@emotion/styled';
  import Offer from './Offer';
  import { useGSAP } from '@gsap/react';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const OffersSection = styled.section`
    overflow: hidden;
    position: relative;
    height: 100vh;
  `;

  const OffersContainer = styled.div`
    display: flex;
    height: 100%;
  `;

  const offersData = [
    {
      title: "20% de Descuento en Organización de Bodas",
      description: "Transforma tu boda en un evento de ensueño con nuestro descuento exclusivo. Nos encargamos de cada detalle para que puedas disfrutar de tu día especial sin preocupaciones.",
      image: "https://cdn0.bodas.com.mx/article-vendor/3443/3_2/1280/jpg/analois-photoshoot-0055_5_193443-164815363528699.jpeg",
      moreInfoLink: "link-a-mas-informacion-boda.html",
      contactLink: "https://wa.me/tu-numero-de-whatsapp-boda",
      bgColor: "#f3f4f6",
      textColor: "#111827"
    },
    {
      title: "30% de Descuento en Fiestas de 15 Años",
      description: "Celebra tus 15 años con una fiesta inolvidable y aprovecha nuestro increíble descuento. Creamos experiencias mágicas que quedarán grabadas para siempre en tu memoria.",
      image: "https://www.perfectainvitacion.com/wp-content/uploads/como-elegir-a-tus-chambelanes-745x500.jpg",
      moreInfoLink: "link-a-mas-informacion-fiesta15.html",
      contactLink: "https://wa.me/tu-numero-de-whatsapp-fiesta15",
      bgColor: "#e5e7eb",
      textColor: "#111827"
    },
    {
      title: "Consultoría Gratuita para Reconciliaciones",
      description: "Organiza una reconciliación memorable con nuestra ayuda. Disfruta de una hora de consultoría gratuita para planificar el reencuentro perfecto y fortalecer tus lazos.",
      image: "https://www.abogadoparafamilias.com/wp-content/uploads/2018/05/reconciliacion_3.jpg",
      moreInfoLink: "link-a-mas-informacion-reconciliacion.html",
      contactLink: "https://wa.me/tu-numero-de-whatsapp-reconciliacion",
      bgColor: "#d1d5db",
      textColor: "#111827"
    }
  ];

  const Offers = () => {
    const offersRef = useRef();

    useGSAP(() => {
      const offers = gsap.utils.toArray('.offer');
      const offersContainer = offersRef.current;
      
      gsap.to(offers, {
        xPercent: -100 * (offers.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: offersContainer,
          pin: true,
          scrub: 1,
          snap: 1 / (offers.length - 1),
          end: () => "+=" + (offersContainer.offsetWidth),
        }
      });
    }, { scope: offersRef });

    return (
      <OffersSection className="offers-container" ref={offersRef}>
        <OffersContainer className="offers">
          {offersData.map((offer, index) => (
            <Offer offer={offer} key={index} />
          ))}
        </OffersContainer>
      </OffersSection>
    );
  };

  export default Offers;

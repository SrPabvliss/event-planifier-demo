import React from 'react';
import EventDetail from './EventDetail';
import styled from '@emotion/styled/macro';



const eventsData = [
  {
    title: "Boda de Ana y Juan",
    description: "Una boda espectacular en la playa con una vista increíble al atardecer.",
    date: "12 de Junio, 2022",
    gallery: [
      "https://luciasecasa.com/wp-content/uploads/2022/06/Galeria-Estudio-Fotografico-2.jpg",
      "https://cdn0.bodas.net/article-real-wedding/267/3_2/960/jpg/2297557.jpeg",
      "https://phantom-marca.unidadeditorial.es/79b44ff7f45a0171b4d6b2c7e9b5811a/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/23/16928088810779.jpg",
      "https://lamagiadecasarse.es/wp-content/uploads/2020/07/candlelit-toronto-wedding-airship-37-impossibly-dreamy-scarlett-oneill-28.jpg",
      "https://cdn0.matrimonios.cl/article-vendor/1766/3_2/960/jpg/img-7477_8_111766-163461423087128.jpeg",
      "https://cdn0.matrimonio.com.pe/article-real-wedding/350/3_2/960/jpg/109090.jpeg",
      "https://cdn0.bodas.com.mx/article-real-wedding/391/3_2/1280/jpg/990229.webp",
      "https://vsd.mx/wp-content/uploads/2023/11/20211016-sj-371_5_180609-164072606291668.jpg"
    ],
    itinerary: [
      { time: "16:00", detail: "Ceremonia en la playa" },
      { time: "18:00", detail: "Recepción y cena" },
      { time: "20:00", detail: "Baile y celebración" }
    ]
  },
  {
    title: "Fiesta de 15 de María",
    description: "Una fiesta de ensueño con temática de princesas y mucha diversión.",
    date: "5 de Marzo, 2021",
    gallery: [
      "https://luciasecasa.com/wp-content/uploads/2022/06/Galeria-Estudio-Fotografico-2.jpg",
      "https://cdn0.bodas.net/article-real-wedding/267/3_2/960/jpg/2297557.jpeg",
      "https://phantom-marca.unidadeditorial.es/79b44ff7f45a0171b4d6b2c7e9b5811a/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/23/16928088810779.jpg",
      "https://lamagiadecasarse.es/wp-content/uploads/2020/07/candlelit-toronto-wedding-airship-37-impossibly-dreamy-scarlett-oneill-28.jpg",
      "https://cdn0.matrimonios.cl/article-vendor/1766/3_2/960/jpg/img-7477_8_111766-163461423087128.jpeg",
      "https://cdn0.matrimonio.com.pe/article-real-wedding/350/3_2/960/jpg/109090.jpeg",
      "https://cdn0.bodas.com.mx/article-real-wedding/391/3_2/1280/jpg/990229.webp",
      "https://vsd.mx/wp-content/uploads/2023/11/20211016-sj-371_5_180609-164072606291668.jpg"
    ],
    itinerary: [
      { time: "18:00", detail: "Recepción y bienvenida" },
      { time: "19:00", detail: "Cena" },
      { time: "21:00", detail: "Baile y música en vivo" }
    ]
  },
  {
    title: "Reconciliación de Pedro y Laura",
    description: "Un evento íntimo y emotivo para celebrar el amor y la unión.",
    date: "23 de Septiembre, 2020",
    gallery: [
      "https://luciasecasa.com/wp-content/uploads/2022/06/Galeria-Estudio-Fotografico-2.jpg",
      "https://cdn0.bodas.net/article-real-wedding/267/3_2/960/jpg/2297557.jpeg",
      "https://phantom-marca.unidadeditorial.es/79b44ff7f45a0171b4d6b2c7e9b5811a/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/23/16928088810779.jpg",
      "https://lamagiadecasarse.es/wp-content/uploads/2020/07/candlelit-toronto-wedding-airship-37-impossibly-dreamy-scarlett-oneill-28.jpg",
      "https://cdn0.matrimonios.cl/article-vendor/1766/3_2/960/jpg/img-7477_8_111766-163461423087128.jpeg",
      "https://cdn0.matrimonio.com.pe/article-real-wedding/350/3_2/960/jpg/109090.jpeg",
      "https://cdn0.bodas.com.mx/article-real-wedding/391/3_2/1280/jpg/990229.webp",
      "https://vsd.mx/wp-content/uploads/2023/11/20211016-sj-371_5_180609-164072606291668.jpg"
    ],
    itinerary: [  
      { time: "14:00", detail: "Ceremonia de reconciliación" },
      { time: "16:00", detail: "Picnic y juegos" },
      { time: "18:00", detail: "Despedida" },
      { time: "20:00", detail: "Fuegos artificiales" },
      { time: "22:00", detail: "Fin del evento" }
    ]
  }
];



const BackgroundTransparentColors = [
  '#f3f4f6',
  '#ECDFD8',
  '#f3f4f6',
];

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  padding: 5px 50px;
  margin: 0;
  background-color: none;
  padding: 20px 0;
`;


const PreviousEvents = () => {
  

  return (
    <>
      <Title className='text-center'>Eventos Anteriores</Title>
      {eventsData.map((event, index) => (
        <EventDetail key={index} event={event} backgroundColor={BackgroundTransparentColors[index % BackgroundTransparentColors.length]}/>
      ))}
    </>
  );
};

export default PreviousEvents;

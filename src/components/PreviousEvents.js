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
      "https://elevento.vip/wp-content/uploads/2020/04/Nota001.jpg",
      "https://fiestaspremium.com/wp-content/uploads/2011/11/protocolo-clasico-para-una-fiesta-de-15-1.jpg",
      "https://quinceaños.es/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-06-at-17.33.01.jpeg",
      "https://fiestaspremium.com/wp-content/uploads/2011/11/15-edecanes-protocolo-fiesta-quince.jpg",
      "https://static.wixstatic.com/media/5aede8_06bccbd0730c4f628b627551d492d529~mv2.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5aede8_06bccbd0730c4f628b627551d492d529~mv2.jpg",
      "https://images.ctfassets.net/86mn0qn5b7d0/0SYPvBZAJMjpAeAvARFKM/f8dbc19577b266dc4f9b5600ef2c006f/iStock-79124780.jpg?w=1800&q=50&fm=jpg&fl=progressive",
      "https://laopinion.com/wp-content/uploads/sites/3/2023/04/shutterstock_1607643112.jpg?w=2600",
      "https://ideasparamisquince.com/wp-content/uploads/2022/07/que-es-una-corte-de-honor-1.jpg"
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
      "https://images.squarespace-cdn.com/content/v1/642c1d5a227d62555176db53/1680783277137-AK9E50QAWDMA66VPVVJQ/Pasion+de+Amor++-+Paquete+Decoracion+-+Luna+Floreria+-+Banos+Ecuador.jpeg?format=1000w",
      "https://winkeventos.com/wp-content/uploads/2023/03/Cuanto-dura-una-luna-de-miel-respuestas-destinos-y-y-tips.webp",
      "https://www.anbuviajes.com/wp-content/uploads/2020/02/felicite-seychelles-sunset-from-koko-bar3.jpg",
      "https://www.es.kayak.com/news/wp-content/uploads/sites/47/2019/10/lunademiel2.jpg",
      "https://blogskystorage.s3.amazonaws.com/2022/12/skyairline_skyairline_image_885.jpeg",
      "https://buenavibra.es/wp-content/uploads/2018/08/Webp.net-resizeimage-4-1.jpg",
      "https://milunademiel.gt/wp-content/uploads/2022/10/eu2-870x555.jpg",
      "https://previews.123rf.com/images/todja/todja1705/todja170500187/78200420-%ED%97%88%EB%8B%88%EB%AC%B8-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%B9%A8%EB%8C%80%EC%97%90-%EA%BD%83%EA%B3%BC-%EC%88%98%EA%B1%B4%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-%EB%91%90-%EB%B0%B1%EC%A1%B0.jpg"
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

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { mainColor } from '@/styles/themes';
import Modal from '../Modal/Modal';
import { projectData } from '../../../public/data/projectData';

export type ProjectData = {
  id: number;
  src: string;
  title: string;
  period: string;
  position: string;
  stack: { url: string }[];
  intro: string;
  planning: string;
  myPage: { text: string }[];
  get: { text: string }[];
  git: string;
  url: string;
};

const SwiperComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState<ProjectData | null>(null);

  const handleImageClick = (image: ProjectData) => {
    setSelectedImageData(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageData(null);
  };
  return (
    <Container>
      <Swiper
        loop={true}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {projectData.map((d) => (
          <SwiperSlide key={d.id}>
            <img src={d.src} onClick={() => handleImageClick(d)} />
            <Title>{d.title}</Title>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImageData && <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedImageData} />}
    </Container>
  );
};

export default SwiperComponent;

const Container = styled.div`
  .swiper {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .swiper-slide {
    width: 29vw;
    /* height: 200px; */
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    cursor: pointer;
  }
  .swiper-pagination-bullet {
    background-color: ${mainColor.gray};
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${mainColor.blue};
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 20px;
    color: ${mainColor.blue};
  }

  .swiper-button-next {
    right: -2px;
  }

  .swiper-button-prev {
    left: -2px;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    background-image: none;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
`;

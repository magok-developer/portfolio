import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import styled from "styled-components";
import { mainColor } from "@/styles/themes";
import Modal from "../Modal/Modal";

export type ProjectData = {
  id: number;
  src: string;
  title: string;
  period: string;
  position: string;
  stack: { url: string }[];
  intro: string;
  summary: string;
  get: string;
  git: string;
  url: string;
};
type Props = {
  data: ProjectData[];
};

const SwiperComponent = ({ data }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] =
    useState<ProjectData | null>(null);

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
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
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
        className='mySwiper'
      >
        {data.map((d) => (
          <SwiperSlide key={d.id}>
            <img src={d.src} onClick={() => handleImageClick(d)} />
            <Title>{d.title}</Title>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImageData && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={selectedImageData}
        />
      )}
    </Container>
  );
};

export default SwiperComponent;

const Container = styled.div`
  .swiper {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .swiper-slide {
    width: 380px;
    height: 200px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
`;

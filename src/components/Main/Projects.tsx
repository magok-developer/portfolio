import React from "react";
import SwiperComponent from "../Swiper/Swiper";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <SwiperComponent />
    </>
  );
};

export default Projects;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

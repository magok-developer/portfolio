import React from 'react';
import SwiperComponent from '../Swiper/Swiper';
import styled from 'styled-components';
import { Title } from '../Text/Title';

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps) => {
  return (
    <Container id={id}>
      <Title title="Projects" />
      <SwiperComponent />
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type Props = {
  data: { url: string; title: string; description: string };
};
const SkillCard = ({ data }: Props) => {
  return (
    <Container>
      <img src={data.url} alt={data.title} />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </Container>
  );
};

export default SkillCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;
  position: relative;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;

  &:hover {
    width: fit-content;
    min-width: 120px;
    height: 150px;
    align-items: center;
    justify-content: flex-start;
  }

  &:hover div {
    display: block;
    height: auto;
  }
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 12px;
  display: none;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 12px;
  display: none;
  text-align: center;
`;

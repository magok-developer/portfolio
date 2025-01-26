import React from 'react';
import styled from 'styled-components';

type Props = {
  data: { url: string; title: string; description?: string };
};
const SkillCard = ({ data }: Props) => {
  return (
    <Container description={data.description}>
      <img src={data.url} alt={data.title} className="img" />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </Container>
  );
};

export default SkillCard;

const Container = styled.div<{ description: string | undefined }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;
  position: relative;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;

  .img {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    width: ${({ description }) => (description ? '180px' : 'fit-content')};
    height: fit-content;
    align-items: center;
    justify-content: flex-start;
  }

  &:hover div {
    display: block;
    height: fit-content;
  }
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 0.6rem;
  display: none;
  text-align: center;
  line-height: normal;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 1rem;
  font-weight: bold;
  display: none;
  text-align: center;
`;

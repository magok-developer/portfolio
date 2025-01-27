import React from 'react';
import styled from 'styled-components';

export type BaseItemData = {
  url: string;
  title: string;
};

export type WithDescriptionData = BaseItemData & {
  description: string;
};

type SkillCardProps<T extends BaseItemData> = {
  data: T;
  isExpanded: boolean;
  onCardClick: (title: string) => void;
};

export const SkillCard = <T extends BaseItemData>({ data, isExpanded, onCardClick }: SkillCardProps<T>) => {
  const hasDescription = (item: BaseItemData): item is WithDescriptionData => {
    return 'description' in item;
  };

  const handleClick = () => {
    if (hasDescription(data)) {
      onCardClick(data.title);
    }
  };

  return (
    <Container hasDescription={hasDescription(data)} isExpanded={isExpanded} onClick={handleClick}>
      <img src={data.url} alt={data.title} className="img" />
      <Title isExpanded={isExpanded}>{data.title}</Title>
      {hasDescription(data) && <Description isExpanded={isExpanded}>{data.description}</Description>}
    </Container>
  );
};

const Container = styled.div<{ hasDescription: boolean; isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isExpanded, hasDescription }) => (isExpanded && hasDescription ? '180px' : '4rem')};
  height: ${({ isExpanded, hasDescription }) => (isExpanded && hasDescription ? 'fit-content' : '4rem')};
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;
  position: relative;
  cursor: ${({ hasDescription }) => (hasDescription ? 'pointer' : 'default')};

  .img {
    width: 3rem;
    height: 3rem;
    transition: transform 0.3s ease;
  }

  ${({ isExpanded }) =>
    isExpanded &&
    `
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;
   z-index: 1;
 `}

  ${({ hasDescription }) =>
    !hasDescription &&
    `
    
   &:hover {
     width: 7rem;
     height: 7rem;
     flex-direction: column;

     ${Title} {
       opacity: 1;
       max-height: 50px;
       height: 20px;
     }
   }
 `}
`;

const Title = styled.div<{ isExpanded: boolean }>`
  margin-top: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${({ isExpanded }) =>
    isExpanded &&
    `
   opacity: 1;
   max-height: 50px;
 `}
`;
const Description = styled.div<{ isExpanded: boolean }>`
  margin-top: 8px;
  font-size: 0.6rem;
  text-align: center;
  line-height: normal;
  opacity: 0;
  max-height: 0;
  overflow: hidden;

  ${({ isExpanded }) =>
    isExpanded &&
    `
    opacity: 1;
    max-height: 200px;
  `}
`;

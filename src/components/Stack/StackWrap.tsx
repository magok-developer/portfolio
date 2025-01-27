import React from 'react';
import styled from 'styled-components';
import { SkillCard } from './SkillCard';

export type BaseItemData = {
  url: string;
  title: string;
};

export type WithDescriptionData = BaseItemData & {
  description: string;
};

type StackWrapProps<T extends BaseItemData> = {
  data: T[];
  expandedCardTitle: string | null;
  onCardClick: (title: string) => void;
};

export const StackWrap = <T extends BaseItemData>({ data, expandedCardTitle, onCardClick }: StackWrapProps<T>) => {
  return (
    <Container>
      <div className="grid">
        {data.map((item, index) => (
          <SkillCard key={index} data={item} isExpanded={expandedCardTitle === item.title} onCardClick={onCardClick} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .grid {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
`;

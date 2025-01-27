import React, { useState } from 'react';
import styled from 'styled-components';
import { useThemeStore } from '@/store/themeStore';
import { Title } from '../Text/Title';
import StackUsageChart from './StackUsageChart';
import { StackWrap } from './StackWrap';
import { mainColor } from '@/styles/themes';
import { STACK_TYPES, useStackManager } from '@/hook/useStackManager';

type StacksProps = {
  id: string;
};

export const Stacks = ({ id }: StacksProps) => {
  const { theme } = useThemeStore();
  const { currentStack, expandedCardTitle, stackData, handleStackChange, handleCardClick } = useStackManager(theme);

  return (
    <Container id={id}>
      <Title title="Stacks" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <StackUsageChart />
        <StackContainer>
          <ButtonWrap>
            {Object.entries(STACK_TYPES).map(([key, value]) => (
              <Button key={value} onClick={() => handleStackChange(value)} isActive={currentStack === value}>
                {key}
              </Button>
            ))}
          </ButtonWrap>
          <StackWrap data={stackData} expandedCardTitle={expandedCardTitle} onCardClick={handleCardClick} />
        </StackContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 600px;
`;

const StackContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
`;

const ButtonWrap = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 14px;
  color: ${({ isActive }) => isActive && mainColor.blue};
  font-weight: ${({ isActive }) => isActive && 'bold'};

  transition: all 0.3s ease-in-out;
`;

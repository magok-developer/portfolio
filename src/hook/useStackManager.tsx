import { useState } from 'react';
import { getDesignData, getSkillData, getToolData } from '../../public/data/stackData';

export const STACK_TYPES = {
  FRONTEND: 'front',
  DESIGN: 'design',
  TOOL: 'tool',
} as const;

export type StackType = (typeof STACK_TYPES)[keyof typeof STACK_TYPES];

export const useStackManager = (theme: string) => {
  const [currentStack, setCurrentStack] = useState<StackType>(STACK_TYPES.FRONTEND);
  const [expandedCardTitle, setExpandedCardTitle] = useState<string | null>(null);

  const stackData = {
    [STACK_TYPES.FRONTEND]: getSkillData(theme),
    [STACK_TYPES.TOOL]: getToolData(theme),
    [STACK_TYPES.DESIGN]: getDesignData(theme),
  };

  const handleStackChange = (stack: StackType) => {
    setCurrentStack(stack);
    setExpandedCardTitle(null);
  };

  const handleCardClick = (title: string) => {
    setExpandedCardTitle((prev) => (prev === title ? null : title));
  };

  return {
    currentStack,
    expandedCardTitle,
    stackData: stackData[currentStack],
    handleStackChange,
    handleCardClick,
  };
};

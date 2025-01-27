import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type FadeSectionProps = {
  children: React.ReactNode;
  index: number;
};

const FadeSection = ({ children, index }: FadeSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <FadeWrapper ref={sectionRef} isEven={index % 2 === 0}>
      <ContentWrapper isEven={index % 2 === 0}>{children}</ContentWrapper>
    </FadeWrapper>
  );
};

const FadeWrapper = styled.div<{ isEven: boolean }>`
  transition: all 1s ease-out;
  opacity: 0;
  position: relative;
  left: ${({ isEven }) => (isEven ? '-60px' : '60px')};
  margin-bottom: 40px;
  width: 100%;

  &.fade-in {
    opacity: 1;
    left: 0;
  }
`;

const ContentWrapper = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isEven }) => (isEven ? 'flex-start' : 'flex-end')};
  text-align: ${({ isEven }) => (isEven ? 'left' : 'right')};
  width: 100%;
  padding: 0 20px;
`;

export default FadeSection;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Nav from '../Nav/Nav';

type Props = {
  isDarkMode: boolean;
};

const MenuToggle = ({ isDarkMode }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    gsap.set('#line1', { y: 0 });
    gsap.set('#line2', { y: 6 });
    gsap.set('#line3', { y: 12 });
  }, []);

  useEffect(() => {
    const line1 = '#line1';
    const line2 = '#line2';
    const line3 = '#line3';

    const backgroundColor = isDarkMode ? '#1D1B1B' : '#EDEDE9';

    gsap.to([line1, line2, line3], { backgroundColor, duration: 0.3 });
  }, [isDarkMode]);

  const handleClick = () => {
    setIsOpened(!isOpened);
    animateButton(!isOpened);
    setIsMenuVisible(!isMenuVisible);
  };

  const animateButton = (open: boolean) => {
    const line1 = '#line1';
    const line2 = '#line2';
    const line3 = '#line3';

    if (open) {
      const selectT = gsap.timeline();

      selectT.addLabel('enter', 0).addLabel('join', 0.25).addLabel('rotate', 0.5);

      selectT.to(line3, { y: 9, ease: 'power3.out', duration: 0.25 }, 'enter');
      selectT.to(line1, { y: 9, ease: 'power3.out', duration: 0.25 }, 'enter');

      selectT.to(
        line3,
        {
          rotation: 45,
          backgroundColor: isDarkMode ? '#1D1B1B' : '#EDEDE9',
          ease: 'power3.out',
          duration: 0.25,
        },
        'rotate'
      );
      selectT.to(
        line1,
        {
          rotation: -45,
          backgroundColor: isDarkMode ? '#1D1B1B' : '#EDEDE9',
          ease: 'power3.out',
          duration: 0.25,
        },
        'rotate'
      );

      gsap.to(line2, { opacity: 0, duration: 0.25 });
    } else {
      const intTL = gsap.timeline();

      intTL.to([line1, line2, line3], {
        rotation: 0,
        y: (i: number) => i * 6,
        backgroundColor: isDarkMode ? '#1D1B1B' : '#EDEDE9',
        duration: 0.3,
      });
      gsap.to(line2, { opacity: 1, duration: 0.25 });
    }
  };

  return (
    <>
      <StyledMenuButton onClick={handleClick}>
        <Line id="line1" />
        <Line id="line2" />
        <Line id="line3" />
      </StyledMenuButton>

      <MenuOverlay className={isMenuVisible ? 'open' : ''} isDarkMode={isDarkMode}>
        <Nav />
      </MenuOverlay>
    </>
  );
};

export default MenuToggle;

const StyledMenuButton = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 5%;
  cursor: pointer;
  z-index: 999;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  position: absolute;
  border-radius: 10px;
  background-color: ${({ theme }) => (theme ? '#1D1B1B' : '#EDEDE9')};
  transition: background-color 0.3s ease;
`;

const MenuOverlay = styled.div<{ isDarkMode: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)')};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 100;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

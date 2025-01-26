import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <span title="About Me" onClick={() => scrollToSection('aboutMe')}>
        About Me
      </span>
      <span title="Stacks" onClick={() => scrollToSection('stacks')}>
        Stacks
      </span>
      <span title="Projects" onClick={() => scrollToSection('projects')}>
        Projects
      </span>
    </Container>
  );
};

export default Nav;

const Container = styled.nav`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  font-size: 1.5vw;
  font-weight: bold;

  span {
    position: relative;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
  }

  span::after {
    position: absolute;
    content: '';
    border-bottom: 2px solid #ffcc00; // 예시로 노란색으로 설정
    transition: width 0.3s ease-out;
    bottom: 0;
    left: auto;
    right: 0;
    width: 0;
  }
  span:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }
`;

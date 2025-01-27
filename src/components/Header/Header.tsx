'use client';

import styled from 'styled-components';
import ThemeToggle from '../Toggle/ThemeToggle';
import { mainColor } from '@/styles/themes';
import MenuToggle from '../Toggle/MenuToggle';

type Props = {
  onClick: () => void;
  isChecked: boolean;
};

const Header = ({ onClick, isChecked }: Props) => {
  return (
    <Container>
      <LeftSection>
        <MenuToggle isDarkMode={isChecked} />
      </LeftSection>
      <RightSection>
        <LinkWrap>
          <a href="https://github.com/magok-developer" target="_blank">
            github
          </a>

          <a href="https://velog.io/@jwha/posts" target="_blank">
            blog
          </a>

          <a
            href="https://www.linkedin.com/in/%EC%A7%80%EC%9B%90-%ED%95%98-83338725b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            linkedin
          </a>

          <a href="https://giddy-product-b00.notion.site/1201267a5d6180259c3ccfea7b59811b" target="_blank">
            resume
          </a>
        </LinkWrap>
        <ThemeToggle onClick={onClick} isChecked={isChecked} />
      </RightSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  background: inherit;
  border-bottom: 0.5px solid ${mainColor.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`;

const LeftSection = styled.div``;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bold;
  font-size: 0.8em;

  a {
    position: relative;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
  }
  a::after {
    position: absolute;
    content: '';
    border-bottom: 2px solid ${mainColor.yellow};
    transition: width 0.3s ease-out;
    bottom: 0;
    left: auto;
    right: 0;
    width: 0;
  }
  a:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }
`;

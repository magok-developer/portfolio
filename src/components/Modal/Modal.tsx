import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { ProjectData } from '../Swiper/Swiper';
import Image from 'next/image';
import { mainColor } from '@/styles/themes';
import { useThemeStore } from '@/store/themeStore';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
};

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 페이지 스크롤 막기
    } else {
      document.body.style.overflow = 'auto'; // 페이지 스크롤 다시 활성화
    }

    return () => {
      document.body.style.overflow = 'auto'; // 모달이 닫힐 때 원래 상태로 복구
    };
  }, [isOpen]);
  if (!isOpen) return null;
  const { theme, toggleTheme, setTheme } = useThemeStore();

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} isDark={theme}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <TopSection>
          <span className="title">{data.title}</span>
          <span className="period">{data.period}</span>
          <div className="stack">
            {data.stack.map((s) => (
              <img src={s.url} alt={s.url} />
            ))}
          </div>
          <span className="intro">{data.intro}</span>
          <div className="image">
            <a href={data.git} target="_blank">
              <Image
                src={theme === 'dark' ? '/image/skill/github-white.svg' : '/image/skill/github-black.svg'}
                alt="git"
                width={24}
                height={24}
              />
            </a>
            {data.url === '' ? (
              <></>
            ) : (
              <a href={data.url} target="_blank">
                <Image
                  src={theme === 'dark' ? '/icon/link-white.svg' : '/icon/link-black.svg'}
                  alt="git"
                  width={20}
                  height={20}
                />
              </a>
            )}
          </div>
        </TopSection>
        <Line />
        <BottomSection>
          <Planning>
            <div className="title-wrap">
              <Image src="/icon/planning.svg" alt="planning" width={24} height={24} />
              <div className="title">기획</div>
            </div>
            <div className="text">{data.planning}</div>
          </Planning>
          <MyPage>
            <div className="title-wrap">
              <Image src="/icon/page.svg" alt="planning" width={26} height={26} />
              <div className="title">구현 페이지</div>
            </div>

            {data.myPage.map((m) => (
              <div className="text-wrap">
                <div className="dot" />
                <div className="text">{m.text}</div>
              </div>
            ))}
          </MyPage>
          <Get>
            <div className="title-wrap">
              <Image src="/icon/emotion.svg" alt="planning" width={22} height={22} />
              <div className="title">느낀점</div>
            </div>

            {data.get.map((g) => (
              <div className="text-wrap">
                <div className="dot" />
                <div className="text">{g.text}</div>
              </div>
            ))}
          </Get>
        </BottomSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div<{ isDark: string }>`
  width: 90%;
  height: 90%;
  background-color: ${({ isDark }) => (isDark === 'dark' ? '#1D1B1B' : '#EDEDE9')};
  position: relative;
  border-radius: 8px;
  padding: 40px;
  z-index: 9999;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${mainColor.blue};
    border-radius: 4px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: ${mainColor.gray};
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .period {
    font-size: 12px;
  }
  .stack {
    display: flex;
    align-items: center;

    gap: 8px;
    img {
      width: 24px;
    }
  }
  .intro {
    font-size: 14px;
  }
  .image {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
`;

const Line = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 0.6px;
  background-color: ${mainColor.lightGray};
`;

const BottomSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 40px;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${mainColor.skyBlue};
  }
  .title-wrap {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .text-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .text {
    font-size: 14px;
    white-space: pre-wrap;
    line-height: 20px;
  }
`;

const Planning = styled.div``;

const MyPage = styled.div``;

const Get = styled.div``;

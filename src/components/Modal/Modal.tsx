import React, { useEffect } from 'react';
import styled from 'styled-components';
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
  const { theme } = useThemeStore();
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

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} isDark={theme}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <TopSection isDark={theme}>
          <span className="title">{data.title}</span>
          <span className="period">{data.period}</span>
          <div className="stack">
            {data.stack.map((s) => (
              <img key={s.url} src={s.url} alt={s.url} />
            ))}
          </div>
          <span className="intro">{data.intro}</span>
          <div className="image">
            <a href={data.git} target="_blank">
              <Image
                src={theme === 'dark' ? '/image/skill/github-white.svg' : '/image/skill/github-black.svg'}
                alt="git"
                width={20}
                height={20}
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

        <BottomSection>
          <Planning>
            <div className="title-wrap">
              <Image src="/icon/planning.svg" alt="planning" width={20} height={20} />
              <div className="title">기획</div>
            </div>
            <div className="text">{data.planning}</div>
          </Planning>
          <MyPage>
            <div className="title-wrap">
              <Image src="/icon/page.svg" alt="planning" width={22} height={22} />
              <div className="title">구현 페이지</div>
            </div>

            {data.myPage.map((m, index) => (
              <div className="text-wrap" key={index}>
                <div className="dot" />
                <div className="text">{m.text}</div>
              </div>
            ))}
          </MyPage>
          <Get>
            <div className="title-wrap">
              <Image src="/icon/emotion.svg" alt="planning" width={18} height={18} />
              <div className="title">느낀점</div>
            </div>

            {data.get.map((g, index) => (
              <div className="text-wrap" key={index}>
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
  max-height: 90vh;
  background-color: ${({ isDark }) => (isDark === 'dark' ? '#1D1B1B' : '#EDEDE9')};
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

const TopSection = styled.div<{ isDark: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${mainColor.lightGray};
  background-color: ${({ isDark }) => (isDark === 'dark' ? '#1D1B1B' : '#EDEDE9')};
  z-index: 1;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .period {
    font-size: 10px;
  }
  .stack {
    display: flex;
    align-items: center;

    gap: 8px;
    img {
      width: 20px;
    }
  }
  .intro {
    font-size: 12px;
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
  z-index: 2;
  font-weight: bold;
`;

const BottomSection = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 40px 30px 40px;
  overflow-y: auto;

  .title-wrap {
    display: flex;
    gap: 12px;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .text-wrap {
    display: flex;
    align-items: flex-start;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    margin-right: 20px;
    margin-top: 4px;
    background-color: ${mainColor.skyBlue};
  }

  .text {
    font-size: 12px;
    white-space: pre-wrap;
    line-height: 16px;
    width: 100%;
  }

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
    background-color: none;
    /* border-radius: 10px;
    box-shadow: inset 0px 0px 5px white; */
  }
`;

const Planning = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Get = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

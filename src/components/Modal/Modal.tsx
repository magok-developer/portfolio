import React from "react";
import styled, { useTheme } from "styled-components";
import { ProjectData } from "../Swiper/Swiper";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
};

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
  if (!isOpen) return null;
  const theme = useTheme();
  const isDark = theme.background === "#1D1B1B" ? "dark" : "light";

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} isDark={isDark}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <TopSection>
          <span className='title'>{data.title}</span>
          <span className='period'>{data.period}</span>
          <div className='stack'>
            {data.stack.map((s) => (
              <img src={s.url} alt={s.url} />
            ))}
          </div>
          <span className='intro'>{data.intro}</span>
          <div className='image'>
            <a href={data.git} target='_blank'>
              <Image
                src={
                  isDark === "dark"
                    ? "/image/skill/github-white.svg"
                    : "/image/skill/github-black.svg"
                }
                alt='git'
                width={24}
                height={24}
              />
            </a>
            {data.url === "" ? (
              <></>
            ) : (
              <a href={data.url} target='_blank'>
                <Image
                  src={
                    isDark === "dark"
                      ? "/icon/link-white.svg"
                      : "/icon/link-black.svg"
                  }
                  alt='git'
                  width={20}
                  height={20}
                />
              </a>
            )}
          </div>
        </TopSection>
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
  background-color: ${({ isDark }) =>
    isDark === "dark" ? "#1D1B1B" : "#EDEDE9"};
  position: relative;
  border-radius: 8px;
  padding: 40px;
  z-index: 9999;
  overflow: "hidden";
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

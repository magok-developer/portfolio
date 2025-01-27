import { useThemeStore } from '@/store/themeStore';
import { mainColor } from '@/styles/themes';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export const TimeLine = () => {
  const { theme } = useThemeStore();
  const careerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    careerRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            const dotElement = entry.target.parentElement?.querySelector('.dot');
            if (dotElement) {
              dotElement.classList.add('fade-in');
            }
          } else {
            entry.target.classList.remove('fade-in');
            const dotElement = entry.target.parentElement?.querySelector('.dot');
            if (dotElement) {
              dotElement.classList.remove('fade-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    careerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      careerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const careers = [
    {
      company: 'Builton',
      period: '2019.08 ~ 2023.08',
      position: 'Data Center, Pro',
      isDev: false,
      dotClass: 'dot1',
    },
    {
      company: 'Terra International',
      period: '2024.06 ~ 2024.10',
      position: 'Research Engineer, Researcher (Frontend Developer)',
      isDev: true,
      dotClass: 'dot2',
    },
    {
      company: 'Wemeet Mobility',
      period: '2024.11 ~ ',
      position: 'Interface Engineering, Manager (Frontend Developer)',
      isDev: true,
      dotClass: 'dot3',
    },
  ];

  return (
    <CareerTimeLine theme={theme}>
      <div className="line-wrapper">
        <div className="line" />
      </div>
      <CareerContainer>
        {careers.map((career, index) => (
          <CareerContentDotWrap key={index}>
            <div className={`dot ${career.dotClass}`} />
            <CareerContent ref={setRef(index)}>
              <span>
                {career.company} <span className="period">{career.period}</span>
              </span>
              {career.position}
              {!career.isDev && <span className="none-dev">non-development</span>}
            </CareerContent>
          </CareerContentDotWrap>
        ))}
      </CareerContainer>
    </CareerTimeLine>
  );
};

const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6px 0px 6px 16px;
  gap: 1.5rem;
`;
const CareerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.5s ease-out;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .period {
    font-size: 14px;
    color: ${mainColor.gray};
  }
`;

const CareerTimeLine = styled.div<{ theme: string }>`
  display: flex;
  height: 100%;
  position: relative;

  .line-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .line {
    height: 100%;
    width: 0.1rem;
    background: ${mainColor.lightGray};
    border-radius: 0.2rem;
  }

  .dot {
    position: absolute;
    background-color: ${({ theme }) => (theme === 'dark' ? '#1D1B1B' : '#EDEDE9')};
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease-out;

    &.fade-in {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dot1 {
    left: -22.5px;
    border: 3px solid ${mainColor.gray};
    transition-delay: 0.1s;
  }

  .dot2 {
    left: -22.5px;
    border: 3px solid ${mainColor.gray};
    transition-delay: 0.3s;
  }

  .dot3 {
    left: -22.5px;
    border: 3px solid ${mainColor.blue};
    transition-delay: 0.5s;
  }

  .none-dev {
    font-size: 0.6rem;
    color: ${mainColor.red};
  }
`;

const CareerContentDotWrap = styled.div`
  font-size: 1.2vw;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;

  &:nth-child(1) ${CareerContent} {
    transition-delay: 0.1s;
  }

  &:nth-child(2) ${CareerContent} {
    transition-delay: 0.3s;
  }

  &:nth-child(3) ${CareerContent} {
    transition-delay: 0.5s;
  }
`;

export default TimeLine;

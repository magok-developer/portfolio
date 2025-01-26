import { useThemeStore } from '@/store/themeStore';
import { mainColor } from '@/styles/themes';
import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  const { theme } = useThemeStore();

  return (
    <Container>
      <AboutMeWrap>
        <LeftSection>
          <div className="about-wrap">
            <span className="title">Birth</span>
            <span className="content">1998.12.03</span>
          </div>
          <div className="about-wrap">
            <span className="title">Email</span>
            <span className="content">hajw.study@gmail.com</span>
          </div>
          <div className="about-wrap">
            <span className="title">Residence</span>
            <span className="content">Seoul, Korea</span>
          </div>
          <div className="about-wrap">
            <span className="title">Completion</span>
            <span className="content">elice coding, SW Engineer Track 6</span>
          </div>
          <div className="about-wrap-career">
            <span className="title">Career</span>
            <TimeLine theme={theme}>
              <div className="line-wrapper">
                <div className="line" />
              </div>
              <div className="career">
                <span className="career-content">
                  <div className="dot dot1" />
                  Builton, Pro<span className="none-dev">non-development</span>
                  <span className="period">2019.08 ~ 2023.08</span>
                </span>
                <span className="career-content">
                  <div className="dot dot2" />
                  Terra International, Research Engineer
                  <span className="period">2024.06 ~ 2024.10</span>
                </span>
                <span className="career-content">
                  <div className="dot dot3" />
                  Wemeet Mobility, Interface Engineering
                  <span className="period">2024.11 ~ </span>
                </span>
              </div>
            </TimeLine>
          </div>
        </LeftSection>
        <img src="image/증명사진-light.png" alt="photo" className="id-photo" />
      </AboutMeWrap>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  height: 100%;
  margin-bottom: 180px;
`;

const AboutMeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  .id-photo {
    width: 17vw;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .about-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .about-wrap-career {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .title {
    color: ${mainColor.blue};
    font-size: 1.5vw;
    font-weight: bold;
    width: 14vw;
  }

  .content {
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .period {
    font-size: 0.7rem;
    color: ${mainColor.skyBlue};
  }
`;

const TimeLine = styled.div<{ theme: string }>`
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
  }

  .dot1 {
    left: -4.5px;

    border: 3px solid ${mainColor.gray};
  }

  .dot2 {
    left: -4.5px;

    border: 3px solid ${mainColor.gray};
  }

  .dot3 {
    left: -4.5px;

    border: 3px solid ${mainColor.blue};
  }

  .career {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6px 0px 6px 16px;
    gap: 1.5rem;
  }

  .none-dev {
    font-size: 0.6rem;
    color: ${mainColor.red};
  }

  .career-content {
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

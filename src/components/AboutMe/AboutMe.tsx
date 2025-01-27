import { mainColor } from '@/styles/themes';
import React from 'react';
import styled from 'styled-components';
import { TimeLine } from './TimeLine';

export const AboutMe = () => {
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
            <TimeLine />
          </div>
        </LeftSection>
        <img src="image/증명사진-light.png" alt="photo" className="id-photo" />
      </AboutMeWrap>
    </Container>
  );
};

const Container = styled.div`
  height: 400px;
  margin: 80px 0;
`;

const AboutMeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

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
    font-size: 0.6rem;
    color: ${mainColor.skyBlue};
    margin-left: 0.3rem;
  }
`;

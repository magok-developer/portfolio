import { mainColor } from "@/styles/themes";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Star from "../Icon/Star";

const AboutMe = () => {
  return (
    <Container>
      <Intro>
        <h1 className='text'>
          FRONT-END<span>프론트엔드</span>
        </h1>
        <h1 className='text'>
          DEVELOPER<span>개발자</span>
        </h1>
        <h1 className='text'>
          HA JI WON<span>하지원 입니다.</span>
        </h1>
      </Intro>
      <AboutMeWrap>
        <LeftSection>
          <div className='about-wrap'>
            <span className='title'>Birth</span>
            <span className='content'>1998.12.03</span>
          </div>
          <div className='about-wrap'>
            <span className='title'>Email</span>
            <span className='content'>hajw.study@gmail.com</span>
          </div>
          <div className='about-wrap'>
            <span className='title'>Residence</span>
            <span className='content'>Seoul, Korea</span>
          </div>
          <div className='about-wrap'>
            <span className='title'>Completion</span>
            <span className='content'>elice coding, SW Engineer Track 6</span>
          </div>
          <div className='about-wrap'>
            <span className='title'>Career</span>
            <div className='career'>
              <span className='content'>
                Builton, Pro<span className='none-dev'>non-development</span>
                <span className='period'>2019.08 ~ 2023.08</span>
              </span>
              <span className='content'>
                Terra International, Research Engineer
                <span className='period'>2024.06 ~ 2024.10</span>
              </span>
            </div>
          </div>
        </LeftSection>

        <img src='/image/증명사진.jpg' alt='photo' className='id-photo' />
      </AboutMeWrap>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  height: 100%;
  margin-bottom: 180px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .text {
    font-size: 2.4vw;
    line-height: 100%;
    margin: 0;

    width: 20vw;
    height: 5vh;

    background-size: 0%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${mainColor.blue};

    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transform-origin: center;
    transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const AboutMeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 50px;

  .id-photo {
    width: 17%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;

  .about-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .career {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .none-dev {
      font-size: 0.7rem;
      color: ${mainColor.red};
    }
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

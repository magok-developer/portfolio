'use client';

import AboutMe from '@/components/Main/AboutMe';
import { IntroText } from '@/components/Text/IntroText';
import Projects from '@/components/Main/Projects';
import Stacks from '@/components/Main/Stacks';
import React from 'react';
import styled from 'styled-components';
import ProjectFadeVersion from '@/components/Main/ProjectFadeVersion';

const Page = () => {
  return (
    <Container>
      <IntroText id="aboutMe" />
      <AboutMe />
      <Stacks id="stacks" />
      <ProjectFadeVersion id="projects" />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  height: 100%;
`;

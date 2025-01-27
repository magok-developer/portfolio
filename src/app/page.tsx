'use client';

import { AboutMe } from '@/components/AboutMe/AboutMe';
import { IntroText } from '@/components/AboutMe/IntroText';
import { Stacks } from '@/components/Stack/Stacks';
import React from 'react';
import styled from 'styled-components';
import { ProjectFadeVersion } from '@/components/Project/ProjectFadeVersion';

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

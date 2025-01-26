'use client';

import AboutMe from '@/components/Main/AboutMe';
import Stacks from '@/components/Main/Stacks';
import Nav from '@/components/Nav/Nav';
import React from 'react';
import styled from 'styled-components';

const page = () => {
  return (
    <Container>
      <AboutMe />
      <Stacks />
    </Container>
  );
};

export default page;

const Container = styled.div`
  height: 100%;
`;

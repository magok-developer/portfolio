'use client';

import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useThemeStore } from '@/store/themeStore';
import GlobalStyle from '@/styles/GlobalStyle';
import Header from './Header/Header';
import { darkTheme, lightTheme } from '@/styles/themes';

const RootContainer = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const themeToSet = savedTheme === 'light' ? 'light' : 'dark';
      setTheme(themeToSet);
      setIsMounted(true);
    }
  }, [setTheme]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle theme={theme === 'dark' ? darkTheme : lightTheme} />
      <Header onClick={toggleTheme} isChecked={theme === 'light'} />
      <Body>{children}</Body>
    </ThemeProvider>
  );
};

export default RootContainer;

const Body = styled.div`
  padding: 80px;
  position: relative;
`;

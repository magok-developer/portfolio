"use client";

import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/styles/themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "./Header/Header";

const RootContainer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? lightTheme : darkTheme;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header onClick={toggleTheme} isChecked={theme === lightTheme} />
      <Body>{children}</Body>
    </ThemeProvider>
  );
};

export default RootContainer;

const Body = styled.div`
  padding: 80px;
`;

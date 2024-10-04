import React from "react";
import styled, { useTheme } from "styled-components";
import SkillCard from "../Card/SkillCard";

const Stacks = () => {
  const theme = useTheme();

  const skill = [
    {
      url: "/image/skill/html.svg",
      title: "HTML",
      description: "설명설명",
    },
    {
      url: "/image/skill/css.svg",
      title: "CSS",
      description: "설명설명",
    },
    {
      url: "/image/skill/js.svg",
      title: "JavaScript",
      description: "설명설명",
    },
    {
      url: "/image/skill/ts.svg",
      title: "TypeScript",
      description: "설명설명",
    },
    {
      url: "/image/skill/react.svg",
      title: "React",
      description: "설명설명",
    },
    {
      url:
        theme.background === "#1D1B1B"
          ? "/image/skill/nextjs-white.svg"
          : "/image/skill/nextjs-black.svg",
      title: "Next.JS",
      description: "설명설명",
    },
    {
      url: "/image/skill/Emotion.svg",
      title: "emotion",
      description: "설명설명",
    },
    {
      url: "/image/skill/StyledComponents.svg",
      title: "Styled-Components",
      description: "설명설명",
    },
    {
      url: "/image/skill/zustand.svg",
      title: "zustand",
      description: "설명설명",
    },
  ];

  const tool = [
    {
      url:
        theme.background === "#1D1B1B"
          ? "/image/skill/github-white.svg"
          : "/image/skill/github-black.svg",
      title: "Github",
      description: "설명설명",
    },
    {
      url: "/image/skill/gitlab.svg",
      title: "Gitlab",
      description: "설명설명",
    },
    {
      url: "/image/skill/postman.svg",
      title: "PostMan",
      description: "설명설명",
    },
    {
      url: "/image/skill/swagger.svg",
      title: "Swagger",
      description: "설명설명",
    },
    {
      url: "/image/skill/vscode.svg",
      title: "VSCode",
      description: "설명설명",
    },
    {
      url: "/image/skill/Discord.svg",
      title: "Discord",
      description: "설명설명",
    },
    {
      url: "/image/skill/figma.svg",
      title: "Figma",
      description: "설명설명",
    },
    {
      url: "/image/skill/Photoshop.svg",
      title: "Photoshop",
      description: "설명설명",
    },
    {
      url: "/image/skill/Illustrator.svg",
      title: "Illustrator",
      description: "설명설명",
    },
  ];

  return (
    <Container>
      <Title>Stacks</Title>
      <FrontSkillSWrap>
        <div>Skill</div>
        <div className='flex'>
          {skill.map((s, index) => (
            <SkillCard key={index} data={s} />
          ))}
        </div>
      </FrontSkillSWrap>
      <ToolSkillWrap>
        <div>Tool</div>
        <div className='flex'>
          {tool.map((s, index) => (
            <SkillCard key={index} data={s} />
          ))}
        </div>
      </ToolSkillWrap>
    </Container>
  );
};

export default Stacks;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  height: 600px;

  .flex {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const FrontSkillSWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200px;
`;

const ToolSkillWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

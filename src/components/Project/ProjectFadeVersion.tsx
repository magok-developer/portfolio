import styled from 'styled-components';
import FadeSection from './FadeSection';
import { getProjectData } from '../../../public/data/projectData';
import { Title } from '../Text/Title';
import Image from 'next/image';
import { useThemeStore } from '@/store/themeStore';
import { useRouter } from 'next/navigation';

type ProjectFadeVersionProps = {
  id: string;
};

export type ProjectData = {
  id: number;
  src: string;
  title: string;
  period: string;
  position: string;
  stack: string[];
  intro: string;
  git: string;
  url: string;
  notion: string;
};

export const ProjectFadeVersion = ({ id }: ProjectFadeVersionProps) => {
  const { theme } = useThemeStore();
  const currentProjectData = getProjectData(theme);
  const route = useRouter();

  const handleImageClick = (notion: string) => {
    route.push(notion);
  };

  return (
    <div id={id}>
      <Title title="Projects" />
      <Container theme={theme}>
        {currentProjectData.map((data, index) => (
          <FadeSection key={index} index={index}>
            <ProjectWrapper isEven={index % 2 === 0}>
              <img src={data.src} alt={data.title} className="mainImg" onClick={() => handleImageClick(data.notion)} />
              <ProjectTextWrapper isEven={index % 2 === 0}>
                <h3>{data.title}</h3>
                <span className="intro">{data.intro}</span>
                <span className="period">{data.period}</span>
                <div className="stack">
                  {data.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="image">
                  <a href={data.git} target="_blank">
                    <Image
                      src={theme === 'dark' ? '/image/skill/github-white.svg' : '/image/skill/github-black.svg'}
                      alt="git"
                      width={20}
                      height={20}
                    />
                  </a>
                  {data.url === '' ? (
                    <></>
                  ) : (
                    <a href={data.url} target="_blank">
                      <Image
                        src={theme === 'dark' ? '/icon/link-white.svg' : '/icon/link-black.svg'}
                        alt="git"
                        width={20}
                        height={20}
                      />
                    </a>
                  )}
                </div>
              </ProjectTextWrapper>
            </ProjectWrapper>
          </FadeSection>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1900px;

  .mainImg {
    width: 300px;
    height: auto;
    box-shadow: ${({ theme }) => (theme === 'dark' ? '' : '0px 10px 10px rgba(0, 0, 0, 0.2)')};
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
      cursor: pointer;
    }
  }

  p {
    max-width: 600px;
  }
`;

const ProjectWrapper = styled.div<{ isEven: boolean }>`
  display: flex;
  gap: 12px;
  justify-content: ${({ isEven }) => (isEven ? 'flex-start' : 'flex-end')};
  flex-direction: ${({ isEven }) => (isEven ? 'row' : 'row-reverse')};
`;

const ProjectTextWrapper = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: ${({ isEven }) => (isEven ? 'flex-start' : 'flex-end')};
  text-align: ${({ isEven }) => (isEven ? 'left' : 'right')};

  h3 {
    margin: 4px 0px;
  }

  .intro {
    font-size: 10px;
    white-space: break-spaces;
  }

  .period {
    font-size: 10px;
  }
  .stack {
    display: flex;
    align-items: center;
    font-size: 10px;

    gap: 8px;

    img {
      width: 20px;
    }
  }
  .image {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

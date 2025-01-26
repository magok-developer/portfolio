import { useThemeStore } from '@/store/themeStore';
import styled from 'styled-components';

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  const { theme } = useThemeStore();
  return (
    <Container>
      <Line theme={theme} />
      <Text>{title}</Text>
      <Line theme={theme} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 30px;
`;

const Text = styled.span`
  /* width: 100%; */
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
`;

const Line = styled.div<{ theme: string }>`
  height: 0.03rem;
  width: 100%;
  background-color: ${({ theme }) => (theme === 'dark' ? '#EDEDE9' : '#1D1B1B')};
`;

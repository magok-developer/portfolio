import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getProjectData } from '../../../public/data/projectData';
import { ProjectData } from '../Project/ProjectFadeVersion';
import styled from 'styled-components';
import { useThemeStore } from '@/store/themeStore';

type ChartData = {
  name: string;
  value: number;
};

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7300',
  '#4B088A',
  '#045FB4',
];

const extractStackUsage = (projectData: ProjectData[]): ChartData[] => {
  const allStacks = projectData.reduce<string[]>((acc, project) => {
    return [...acc, ...project.stack];
  }, []);

  const stackUsage = allStacks.reduce<Record<string, number>>((acc, stack) => {
    acc[stack] = (acc[stack] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(stackUsage)
    .map(
      ([name, count]): ChartData => ({
        name,
        value: count,
      })
    )
    .sort((a, b) => b.value - a.value);
};

// 커스텀 툴팁 컴포넌트
const CustomTooltip = ({ active, payload }: any) => {
  const { theme } = useThemeStore();
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <TooltipContainer theme={theme} style={{ background: `${data.fill}80` }}>
        <div
          style={{ background: data.fill, border: `1px solid ${theme === 'dark' ? 'white' : 'black'}` }}
          className="dot"
        />
        <p className="tooltip-title">{data.name}</p>
        <p className="tooltip-value">{`(${((data.value / 8) * 100).toFixed(0)}%)`}</p>
      </TooltipContainer>
    );
  }
  return null;
};

const StackUsageChart = () => {
  const { theme } = useThemeStore();
  const stackUsageData = extractStackUsage(getProjectData(theme));
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let resizeHandler: (() => void) | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 보이기 시작할 때 즉시 한 번 리사이즈
            setKey((prev) => prev + 1);

            // 리사이즈 핸들러 등록
            resizeHandler = () => setKey((prev) => prev + 1);
            window.addEventListener('resize', resizeHandler);
          } else {
            // 화면에서 벗어날 때 리사이즈 핸들러 제거
            if (resizeHandler) {
              window.removeEventListener('resize', resizeHandler);
              resizeHandler = null;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      // 클린업 시 리사이즈 핸들러가 남아있다면 제거
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
    };
  }, []);

  return (
    <ChartContainer ref={containerRef}>
      <ResponsiveContainer key={key} width={300} height={160}>
        <PieChart width={200} height={160}>
          <Pie
            data={stackUsageData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            style={{ outline: 'none' }}
            tabIndex={-1}
          >
            {stackUsageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <LegendContainer>
        {stackUsageData.map((entry, index) => (
          <LegendItem key={entry.name}>
            <LegendColor color={COLORS[index % COLORS.length]} />
            <LegendText>{entry.name}</LegendText>
          </LegendItem>
        ))}
      </LegendContainer>
    </ChartContainer>
  );
};

export default StackUsageChart;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LegendContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
`;

const LegendText = styled.span`
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TooltipContainer = styled.div<{ theme: string }>`
  padding: 8px;
  border: 1px solid ${({ theme }) => (theme === 'dark' ? 'rgba(199, 199, 199, 0.5)' : 'rgba(0, 0, 0, 0.5)')};
  border-radius: 4px;

  display: flex;
  gap: 4px;
  align-items: center;

  .dot {
    width: 6px;
    height: 6px;
  }

  .tooltip-title {
    font-size: 10px;
    font-weight: bold;
  }

  .tooltip-value {
    font-size: 8px;
  }
`;

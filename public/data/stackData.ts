export const getSkillData = (theme: string) => [
  {
    url: '/image/skill/html.svg',
    title: 'HTML',
    description:
      '시맨틱 태그를 활용하여 검색엔진 최적화(SEO)와 웹 접근성을 고려한 마크업 구조를 설계하고 구현할 수 있습니다.',
  },
  {
    url: '/image/skill/css.svg',
    title: 'CSS',
    description:
      'Flexbox와 Grid를 활용한 복잡한 레이아웃 구현이 가능하며, 다양한 브레이크포인트를 활용한 반응형 웹 디자인을 구현할 수 있습니다. 또한 애니메이션과 트랜지션을 활용한 인터랙티브한 UI 요소를 제작할 수 있습니다.',
  },
  {
    url: '/image/skill/js.svg',
    title: 'JavaScript',
    description:
      'Promise와 async/await를 활용한 비동기 데이터 처리가 가능하며, 이벤트 위임을 통한 효율적인 이벤트 핸들링과 커스텀 훅을 통한 로직 재사용을 구현할 수 있습니다.',
  },
  {
    url: '/image/skill/ts.svg',
    title: 'TypeScript',
    description:
      '제네릭과 유틸리티 타입을 활용하여 재사용 가능한 타입을 설계할 수 있으며, interface와 type을 활용한 명확한 API 타입 정의가 가능합니다. 또한 타입 가드를 통한 안전한 타입 분기 처리를 구현할 수 있습니다.',
  },
  {
    url: '/image/skill/react.svg',
    title: 'React',
    description:
      '메모이제이션(useMemo, useCallback)을 활용한 성능 최적화와 커스텀 훅을 통한 비즈니스 로직 분리를 구현할 수 있습니다. Context API와 상태 관리 라이브러리를 활용한 전역 상태 관리도 가능합니다.',
  },
  {
    url: theme === 'dark' ? '/image/skill/nextjs-white.svg' : '/image/skill/nextjs-black.svg',
    title: 'Next.JS',
    description:
      '서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용하여 최적화된 웹 애플리케이션을 개발하며, 앱 라우팅 기능을 활용할 수 있습니다.',
  },
  {
    url: '/image/skill/Emotion.svg',
    title: 'emotion',
    description:
      'props를 활용한 동적 스타일링과 테마 시스템을 구축할 수 있으며, Global Style을 통한 일관된 디자인 시스템을 구현할 수 있습니다.',
  },
  {
    url: '/image/skill/StyledComponents.svg',
    title: 'Styled-Components',
    description:
      'props와 attrs를 활용한 조건부 스타일링이 가능하며, ThemeProvider를 통한 다크모드 구현과 반응형 믹스인 설계를 할 수 있습니다.',
  },
  {
    url: '/image/skill/vanilla-extract.svg',
    title: 'Vanilla-extract',
    description: 'sprinkles를 활용한 유틸리티 클래스 생성과 recipe를 통한 조건부 스타일링을 구현할 수 있습니다.',
  },
  {
    url: '/image/skill/zustand.svg',
    title: 'zustand',
    description:
      '미들웨어를 활용한 상태 변화 로깅과 지속성을 구현할 수 있으며, 선택적 상태 구독을 통한 불필요한 리렌더링 방지가 가능합니다.',
  },
];

export const getDesignData = (theme: string) => [
  {
    url: '/image/skill/figma.svg',
    title: 'Figma',
  },
  {
    url: '/image/skill/Photoshop.svg',
    title: 'Photoshop',
  },
  {
    url: '/image/skill/Illustrator.svg',
    title: 'Illustrator',
  },
];

export const getToolData = (theme: string) => [
  {
    url: theme === 'dark' ? '/image/skill/github-white.svg' : '/image/skill/github-black.svg',
    title: 'Github',
  },
  {
    url: '/image/skill/GitLab.svg',
    title: 'Gitlab',
  },
  {
    url: '/image/skill/postman.svg',
    title: 'PostMan',
  },
  {
    url: '/image/skill/swagger.svg',
    title: 'Swagger',
  },
  {
    url: '/image/skill/jira.svg',
    title: 'Jira',
  },
  {
    url: '/image/skill/confluence.svg',
    title: 'Confluence',
  },
  {
    url: '/image/skill/bitbucket.svg',
    title: 'Bitbucket',
  },
  {
    url: '/image/skill/vscode.svg',
    title: 'VSCode',
  },
  {
    url: '/image/skill/slack.svg',
    title: 'Slack',
  },
  {
    url: '/image/skill/Discord.svg',
    title: 'Discord',
  },
];

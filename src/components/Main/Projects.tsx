import React from "react";
import SwiperComponent from "../Swiper/Swiper";
import styled from "styled-components";

const images = [
  {
    id: 0,
    src: "/image/project-image/reBirth/reBirth.png",
    title: "Re:Birth",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "",
  },

  {
    id: 1,
    src: "/image/project-image/whiteRabbit/whiteRabbit.png",
    title: "White Rabbit",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "",
  },
  {
    id: 2,
    src: "/image/project-image/sideGo/sideGo.png",
    title: "Side Go",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "",
  },
  {
    id: 3,
    src: "/image/project-image/aboutMe/aboutMe.png",
    title: "About Me",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "https://jw-pf.vercel.app/",
  },
  {
    id: 4,
    src: "/image/project-image/todo/todo.png",
    title: "Todo & Diary",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "",
  },
  {
    id: 5,
    src: "/image/project-image/myHome/myHome.png",
    title: "My Home",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "",
  },
  {
    id: 6,
    src: "/image/project-image/portfolio/portfolio.png",
    title: "Portfolio",
    period: "2023.10.2 ~ 2023.10.13",
    position: "frontend",
    stack: [
      { url: "/image/skill/html.svg" },
      { url: "/image/skill/css.svg" },
      { url: "/image/skill/js.svg" },
    ],
    intro:
      "4개월간 진행된 부트캠프에서 1차로 진행한 팀 프로젝트 입니다. 프로젝트는 2주간 진행 되었으며, 최종적으로 대상을 수상하였습니다.",
    summary:
      "개발 공부를 본격적으로 시작한 뒤 진행 된 첫 팀 프로젝트 였습니다. 모든 팀이 쇼핑몰이라는 공통 주제를 가지고 진행 하였으며, 제가 속했던 2팀에서는 업사이클링 제품을 판매하는 쇼핑몰을 제작하였습니다.",
    get: "부트캠프에서 제시한 필수 구현 기능 중 저는 장바구니와 비회원, 회원 주문 조회를 담당했습니다. 장바구니는 백엔드가 아닌 프론트엔드에서 관리해야 했기에, 관련 데이터를 localStorage를 활용하여 유저가 장바구니에 추가한 상품을 관리했습니다. 이 프로젝트를 통해 git을 처음 사용해보며 버전 관리의 중요성을 깨달았습니다. 구현하는 과정에서 바닐라 자바스크립트를 사용했는데, innerHTML을 사용하는 빈도가 많았고 코치님께서 innerHTML은 XSS(Cross-Site-Scripting) 공격에 취약하며, 악의적인 스크립트가 실행될 가능성이 있고, 대량의 데이터를 처리할 때 성능이 저하된다며 사용을 지양해야하는 이유을 알려주셨고 좋은 공부가 되었습니다. 많이 부족하던 저를 잘 이끌어주던 팀원들 덕분에 대상이라는 값진 상을 받을 수 있게 되었습니다.",
    git: "https://github.com/magok-developer/Rebirth",
    url: "",
  },
];

const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <SwiperComponent data={images} />
    </>
  );
};

export default Projects;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

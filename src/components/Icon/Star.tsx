import { mainColor } from "@/styles/themes";
import React from "react";
import styled from "styled-components";

type Props = {
  style: React.CSSProperties;
};

const Star = ({ style }: Props) => {
  return (
    <StarSvg viewBox='0 0 784.11 815.53' style={style}>
      <path d='M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z' />
    </StarSvg>
  );
};

export default Star;

const StarSvg = styled.svg`
  position: absolute;

  height: auto;
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
`;

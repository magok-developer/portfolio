import { darkTheme, mainColor } from '@/styles/themes';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
  isChecked: boolean;
};

const ThemeToggle = ({ onClick, isChecked }: Props) => {
  return (
    <>
      <Checkbox type="checkbox" id="toggle" onClick={onClick} checked={isChecked} readOnly />
    </>
  );
};

export default ThemeToggle;

const Checkbox = styled.input`
  width: 2.5rem;
  height: 20px;
  background: #edede9;
  border-radius: 1em;
  position: relative;

  accent-color: #edede9;

  &::before {
    content: '';
    text-align: center;
    line-height: 25px;
    width: 50px;
    height: 25px;
    display: block;
    position: absolute;
    border-radius: 15px;
    background-color: ${mainColor.lightGray};
    box-shadow: 0 0 8px 1.5px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in;
  }

  &::after {
    content: '';
    display: block;
    position: relative;
    width: 20px;
    height: 20px;
    top: 2.5px;
    left: 2px;
    border-radius: 50%;
    background: #2f3640;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }

  &:checked {
    &::before {
      background-color: #bbbbbb;
    }
    &::after {
      background-color: #edede9;
      left: calc(100% - 12.5px);
      cursor: pointer;
    }
  }
`;

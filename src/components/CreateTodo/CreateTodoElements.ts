import styled from "styled-components";
import { PlusSquare } from "@styled-icons/bootstrap/PlusSquare";
import { COLORS, TRANSITION } from "../../utilities/constants";

export const Form = styled.form`
  position: relative;
  display: flex;
  background: ${COLORS.grayLight};
  padding: 2rem;
  border-radius: 4px;
  margin-bottom: 2rem;
`;
export const InputWrapper = styled.div`
  display: block;
`;
export const Input = styled.input`
  display: block;
  border-radius: 4px;
  width: 100%;
  border: 0;
  box-shadow: inset 0 0 0 1px gray;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  height: 2.2rem;
`;
export const Icon = styled(PlusSquare)`
  color: ${COLORS.white};
  width: 2.5rem;
  z-index: 999;
  pointer-events: none;
  transition: color ${TRANSITION.ease};
`;
export const AddBtn = styled.button`
  margin-left: 1rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  cursor: pointer;
  position: relative;
  background: ${COLORS.blue};
  &:before {
    content: "";
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: ${COLORS.black};
    color: ${COLORS.white};
    transition: height ${TRANSITION.ease};
  }
  &:hover {
    &:before {
      height: 0;
    }
  }
  &:hover ${Icon} {
    color: ${COLORS.white};
  }
  &:active {
    transform: translateY(2px);
  }
`;

import styled from "styled-components";
import { COLORS, DEVICE, TRANSITION } from "../../utilities/constants";
import { TrashBin } from "@styled-icons/ionicons-sharp/TrashBin";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38rem;
  width: 100%;
  margin-top: 10rem;
  @media ${DEVICE.sm} {
    max-width: 100%;
    width: 100%;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Filter = styled.select`
  display: flex;
  height: 2.2rem;
`;
export const Option = styled.option``;
export const H1 = styled.h1`
  margin-bottom: 1rem;
`;

export const Ul = styled.ul`
  display: block;
  @media ${DEVICE.sm} {
    width: 100%;
  }
`;
export const Check = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  min-width: 1.5rem;
  cursor: pointer;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  padding: 1.2rem 2rem;
  border: 1px solid ${COLORS.grayLight};
  box-shadow: -2px 3px 5px hsla(0, 0%, 0%, 0.2);
  background: ${COLORS.white};
  border-radius: 4px;
  transition: opacity ${TRANSITION.ease};
  opacity: ${(props: any) => (props["data-complete"] ? "0.5" : "1")};
  filter: ${(props: any) => (props["data-complete"] ? "grayscale(90%)" : "")};
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 2rem;
`;

export const TodoInput = styled.input`
  background: none;
  border: 0;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
  font-weight: 700;
  color: ${COLORS.blue};
`;

export const TodoDeadline = styled.p`
  font-size: 1.2rem;
  margin-top: 0.2rem;
  opacity: 0.8;
`;
export const Span = styled.span`
  font-weight: 700;
`;
export const Icon = styled(TrashBin)`
  display: flex;
  pointer-events: none;
  width: 2.4rem;
  opacity: 0.6;
  transition: opacity ${TRANSITION.ease};
`;
export const RemoveBtn = styled.button`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  &:hover ${Icon} {
    opacity: 1;
  }
`;

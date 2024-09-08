import { Color } from "@/const/style";
import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
};

export const BlackButton = ({ text, onClick }: Props) => {
  return (
    <StyledWrap>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: inline-flex;
`;
const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${Color.White};
  padding: 8px;
  gap: 8px;
  width: 83px;
  height: 32px;
  background: #2c2c2c;
  border: 1px solid #2c2c2c;
  border-radius: 8px;
`;

import { ColorRightArrow } from "@/assets/images";
import styled from "styled-components";

type Props = {
  text: string;
  onClick: () => void;
};

export const SeeAllButton = ({ text, onClick }: Props) => {
  return (
    <StyledWrap>
      <StyledButton onClick={onClick}>
        {text}
        <StyledArrow></StyledArrow>
      </StyledButton>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: inline-flex;
`;
const StyledButton = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 5px;
  border: 1px solid #009fb9;
  border-radius: 8px;
  color: #009fb9;
`;
const StyledArrow = styled(ColorRightArrow)``;

import SvgChecked from "@/assets/images/Checked";
import { Color } from "@/const/style";
import styled from "styled-components";

type IProps = {
  tag: string;
  isChecked?: boolean;
};

export const Tag = ({ tag, isChecked }: IProps) => {
  return (
    <StyledWrap>
      {isChecked && <StyledChecked></StyledChecked>}
      {tag}
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  background: ${Color.White};
  border-radius: 8px;
  flex-grow: 0;
  color: #2c2c2c;
  cursor: pointer;
`;

const StyledChecked = styled(SvgChecked)``;

import SvgWhiteRightArrow from "@/assets/images/WhiteRightArrow";
import { Color } from "@/const/style";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  className?: string;
};

export const SignUpForFree = ({ className, onClick }: Props) => {
  return (
    <StyledWrap className={className}>
      <StyledText onClick={onClick}>
        Sign Up for free
        <StyledIcon></StyledIcon>
      </StyledText>
    </StyledWrap>
  );
};

const StyledWrap = styled.div``;
const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 368px;
  height: 46px;
  background: #009fb9;
  border-radius: 8px;
  color: ${Color.White};
`;
const StyledIcon = styled(SvgWhiteRightArrow)``;

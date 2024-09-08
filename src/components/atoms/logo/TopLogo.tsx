import SvgTopLogo from "@/assets/images/TopLogo";
import styled from "styled-components";

type IProps = {
  className?: string;
};

export const TopLogo = ({ className }: IProps) => {
  return (
    <StyledWrap className={className}>
      <StyledLogo />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const StyledLogo = styled(SvgTopLogo)``;

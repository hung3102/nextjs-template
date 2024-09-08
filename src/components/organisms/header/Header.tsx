import styled from "styled-components";
import { TabBar } from "../../molecules/tabBar/TabBar";
import { TopLogo } from "../../atoms/logo/TopLogo";
import { LinkText } from "@/components/atoms/text/LinkText";

export const Header = () => {
  return (
    <StyledWrap>
      <StyledLeft>
        <StyledLogo></StyledLogo>
        <StyledTab></StyledTab>
      </StyledLeft>
      <StyledRight>
        <StyledLink
          text="Sign in"
          onClick={() => {
            console.log("TODOH");
          }}
          isBold={true}
        ></StyledLink>
        <StyledText>For Employer</StyledText>
      </StyledRight>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 72px;
  gap: 24px;
  height: 78px;
  background: #ffffff;
  border-bottom: 1px solid #d9d9d9;
  box-shadow:
    0px 1px 4px rgba(12, 12, 13, 0.1),
    0px 1px 4px rgba(12, 12, 13, 0.05);
`;
const StyledLeft = styled.div`
  display: flex;
`;
const StyledLogo = styled(TopLogo)`
  margin-right: 20px;
`;
const StyledTab = styled(TabBar)``;
const StyledRight = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const StyledLink = styled(LinkText)``;
const StyledText = styled.div``;

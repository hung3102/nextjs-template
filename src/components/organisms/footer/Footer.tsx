import SvgInstagram from "@/assets/images/Instagram";
import SvgLinkedin from "@/assets/images/Linkedin";
import SvgTopLogo from "@/assets/images/TopLogo";
import SvgX from "@/assets/images/X";
import SvgYoutube from "@/assets/images/Youtube";
import { SocialLogo } from "@/components/atoms/logo/SocialLogo";
import { NormalText } from "@/components/atoms/text/NormalText";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledWrap>
      <StyledBox>
        <StyledLogo></StyledLogo>

        <StyledInfo>
          <StyledColumn>
            <StyledTitle
              text="Job Seekers"
              fontSize={TextSize.BodyMedium}
            ></StyledTitle>
            <StyledElement
              text="Job search"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Recommended jobs"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Company list"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Application history"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Career insights"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
          </StyledColumn>

          <StyledColumn>
            <StyledTitle
              text="Employers"
              fontSize={TextSize.BodyMedium}
            ></StyledTitle>
            <StyledElement
              text="Posting jobs"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Pricing"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Register a company profile"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
          </StyledColumn>

          <StyledColumn>
            <StyledTitle
              text="About us"
              fontSize={TextSize.BodyMedium}
            ></StyledTitle>
            <StyledElement
              text="About the company"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Help & support"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
            <StyledElement
              text="Contact us"
              fontSize={TextSize.BodyMedium}
              onClick={() => console.log("TODOH")}
            ></StyledElement>
          </StyledColumn>

          <StyledSocialGroup>
            <StyledSocialLogo
              logoComponent={<SvgX></SvgX>}
              onClick={() => console.log("TODOH")}
            ></StyledSocialLogo>
            <StyledSocialLogo
              logoComponent={<SvgInstagram></SvgInstagram>}
              onClick={() => console.log("TODOH")}
            ></StyledSocialLogo>
            <StyledSocialLogo
              logoComponent={<SvgYoutube></SvgYoutube>}
              onClick={() => console.log("TODOH")}
            ></StyledSocialLogo>
            <StyledSocialLogo
              logoComponent={<SvgLinkedin></SvgLinkedin>}
              onClick={() => console.log("TODOH")}
            ></StyledSocialLogo>
          </StyledSocialGroup>
        </StyledInfo>
      </StyledBox>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 32px 100px 64px 32px;
  height: 300px;
  align-self: stretch;
  box-sizing: border-box;
  background: linear-gradient(319.93deg, #e6fcff 7.85%, #ffffff 58.78%);
  border-top: 1px solid #d9d9d9;
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 977.98px;
  height: 266px;
`;
const StyledLogo = styled(SvgTopLogo)``;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 978px;
  height: 208px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 262px;
  height: 208px;
`;
const StyledTitle = styled(NormalText)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 262px;
  height: 38px;
  color: #009fb9;
`;
const StyledElement = styled(NormalText)``;

const StyledSocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 143.98px;
  height: 24px;
`;
const StyledSocialLogo = styled(SocialLogo)``;

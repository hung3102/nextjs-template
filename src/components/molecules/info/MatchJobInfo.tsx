import SvgMatchJob from "@/assets/images/MatchJob";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export const MatchJobInfo = () => {
  return (
    <StyledWrap>
      <StyledIcon></StyledIcon>
      <StyledTitle
        fontSize={TextSize.HeadingBase}
        title="We match you with jobs based on your experience"
      ></StyledTitle>
      <StyledDetail text="Based on the experience details&CV you register on your Profile Page, you'll receive job scouts for positions that best match your skills."></StyledDetail>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 381.33px;
  height: 344px;
`;
const StyledIcon = styled(SvgMatchJob)``;
const StyledTitle = styled(TitleText)`
  text-align: center;
`;
const StyledDetail = styled(GrayText)`
  text-align: center;
`;

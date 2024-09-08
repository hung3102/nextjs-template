import SvgTrackApplication from "@/assets/images/TrackApplication";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export const TrackApplicationInfo = () => {
  return (
    <StyledWrap>
      <StyledIcon></StyledIcon>
      <StyledTitle
        fontSize={TextSize.HeadingBase}
        title="Track your applications"
      ></StyledTitle>
      <StyledDetail text="Manage Your Application Status Easily track the dates and statuses of your past applications directly from your Profile Page."></StyledDetail>
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
const StyledIcon = styled(SvgTrackApplication)``;
const StyledTitle = styled(TitleText)`
  text-align: center;
`;
const StyledDetail = styled(GrayText)`
  text-align: center;
`;

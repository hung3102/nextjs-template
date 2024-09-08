import { SignUpForFree } from "@/components/atoms/button/SignUpForFree";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { FavoritePositionInfo } from "@/components/molecules/info/FavoritePositionInfo";
import { MatchJobInfo } from "@/components/molecules/info/MatchJobInfo";
import { TrackApplicationInfo } from "@/components/molecules/info/TrackApplicationInfo";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export const HowItWorkInfo = () => {
  return (
    <StyledWrap>
      <StyledTitleGroup>
        <StyledGrayText
          text="How it works"
          fontSize={TextSize.HeadingBase}
        ></StyledGrayText>
        <StyledTitleText
          title="What you can do on Tech Job Japan?"
          fontSize={TextSize.TitleBase}
        ></StyledTitleText>
      </StyledTitleGroup>

      <StyledInfoGroup>
        <StyledMatchJobInfo></StyledMatchJobInfo>
        <StyledTrackApplicationInfo></StyledTrackApplicationInfo>
        <StyledFavoritePosition></StyledFavoritePosition>
      </StyledInfoGroup>

      <StyledButton
        onClick={() => {
          console.log("TODOH");
        }}
      ></StyledButton>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 24px;
  gap: 48px;

  width: 1312px;
  height: 653px;
`;

const StyledTitleGroup = styled.div``;
const StyledGrayText = styled(GrayText)``;
const StyledTitleText = styled(TitleText)``;

const StyledInfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 0px;
  gap: 28px;
`;
const StyledMatchJobInfo = styled(MatchJobInfo)``;
const StyledTrackApplicationInfo = styled(TrackApplicationInfo)``;
const StyledFavoritePosition = styled(FavoritePositionInfo)``;

const StyledButton = styled(SignUpForFree)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

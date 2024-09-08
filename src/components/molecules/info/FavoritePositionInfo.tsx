import SvgFavoritePosition from "@/assets/images/FavoritePosition";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export const FavoritePositionInfo = () => {
  return (
    <StyledWrap>
      <StyledIcon></StyledIcon>
      <StyledTitle
        fontSize={TextSize.HeadingBase}
        title="Save and Manage your favorite positions"
      ></StyledTitle>
      <StyledDetail text="Found a position you're interested in? Simply click the Save button, and you can review it anytime on your Profile Page."></StyledDetail>
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
const StyledIcon = styled(SvgFavoritePosition)``;
const StyledTitle = styled(TitleText)`
  text-align: center;
`;
const StyledDetail = styled(GrayText)`
  text-align: center;
`;

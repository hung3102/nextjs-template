import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export type ICareerInsightBox = {
  thumbnailUrl: string;
  title: string;
  description: string;
  onClick: () => void;
};

export const CareerInsightBox = ({
  thumbnailUrl,
  title,
  description,
  onClick,
}: ICareerInsightBox) => {
  return (
    <StyledWrap onClick={onClick}>
      <StyledThumbnail thumbnailUrl={thumbnailUrl}></StyledThumbnail>
      <StyledTitleAndText>
        <StyledTitle
          title={title}
          fontSize={TextSize.HeadingBase}
        ></StyledTitle>
        <StyledDescription
          text={description}
          fontSize={TextSize.BodyMedium}
        ></StyledDescription>
      </StyledTitleAndText>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  min-width: 240px;
  width: 380px;
  height: 346px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

const StyledThumbnail = styled.div<{ thumbnailUrl: string }>`
  width: 381px;
  height: 160px;
  background: url(${(props) => props.thumbnailUrl}) no-repeat center;
`;

const StyledTitleAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 381.33px;
  min-width: 160px;
  height: 161px;
  align-self: stretch;
`;
const StyledTitle = styled(TitleText)``;
const StyledDescription = styled(GrayText)``;

import { SeeAllButton } from "@/components/atoms/button/SeeAllButton";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import {
  CareerInsightBox,
  ICareerInsightBox,
} from "@/components/molecules/insight/CareerInsightBox";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export type ICareerInsightContainer = {
  lastUpdatedText: string;
  posts: ICareerInsightBox[];
};

export const CareerInsightContainer = ({
  lastUpdatedText,
  posts,
}: ICareerInsightContainer) => {
  const firstLinePosts = posts.slice(0, 3);
  const secondLinePosts = posts.slice(3, 6);

  return (
    <StyledWrap>
      <StyledHeader>
        <StyledTextWrap>
          <StyledTitle
            title="Career Insight"
            fontSize={TextSize.HeadingBase}
          ></StyledTitle>
          <StyledLastUpdated
            text={`Last updated ${lastUpdatedText}`}
            fontSize={TextSize.HeadingMedium}
          ></StyledLastUpdated>
        </StyledTextWrap>
        <StyledSeeAll
          text="See all"
          onClick={() => {
            console.log("TODOH");
          }}
        ></StyledSeeAll>
      </StyledHeader>

      <StyledPostGroup>
        {firstLinePosts.map((post) => (
          <StyledCareerInsightBox
            thumbnailUrl={post.thumbnailUrl}
            title={post.title}
            description={post.description}
            onClick={post.onClick}
          ></StyledCareerInsightBox>
        ))}
      </StyledPostGroup>
      <StyledPostGroup>
        {secondLinePosts.map((post) => (
          <StyledCareerInsightBox
            thumbnailUrl={post.thumbnailUrl}
            title={post.title}
            description={post.description}
            onClick={post.onClick}
          ></StyledCareerInsightBox>
        ))}
      </StyledPostGroup>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 64px;
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 1390px;
  height: 85px;
  align-self: stretch;
`;
const StyledTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 297px;
  height: 61px;
`;
const StyledTitle = styled(TitleText)``;
const StyledLastUpdated = styled(GrayText)``;
const StyledSeeAll = styled(SeeAllButton)``;

const StyledPostGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  gap: 48px;
  width: 1390px;
  height: 393px;
  align-self: stretch;
`;
const StyledCareerInsightBox = styled(CareerInsightBox)``;

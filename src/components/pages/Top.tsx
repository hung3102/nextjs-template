import styled from "styled-components";
import { Header } from "../organisms/header/Header";
import { SearchContainer } from "../organisms/searchContainer/SearchContainer";
import { HowItWorkInfo } from "../organisms/info/HowItWorkInfo";
import {
  IOpportunity,
  Opportunity,
} from "../organisms/opportunity/Opportunity";
import {
  ILatestJobContainer,
  LatestJobContainer,
} from "../organisms/job/LatestJobContainer";
import {
  CareerInsightContainer,
  ICareerInsightContainer,
} from "../organisms/insight/CareerInsightContainer";
import { TopJobAlertContainer } from "../organisms/info/TopJobAlertContainer";
import { Footer } from "../organisms/footer/Footer";

type IProps = {
  opportunityData: IOpportunity;
  latestJobData: ILatestJobContainer;
  careerInsightData: ICareerInsightContainer;
};

export const Top = ({
  opportunityData,
  latestJobData,
  careerInsightData,
}: IProps) => {
  return (
    <StyledWrap>
      <StyledHeader></StyledHeader>
      <StyledJobSearchContainer></StyledJobSearchContainer>
      <StyledHowItWork></StyledHowItWork>
      <StyledOpportunity
        logoUrls={opportunityData.logoUrls}
        companies={opportunityData.companies}
      ></StyledOpportunity>
      <StyledLatestJobs
        lastUpdatedText={latestJobData.lastUpdatedText}
        jobs={latestJobData.jobs}
      ></StyledLatestJobs>
      <StyledCareerInsight
        lastUpdatedText={careerInsightData.lastUpdatedText}
        posts={careerInsightData.posts}
      ></StyledCareerInsight>
      <StyledJobAlert></StyledJobAlert>
      <StyledFooter></StyledFooter>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 1512px;
`;
const StyledHeader = styled(Header)``;
const StyledJobSearchContainer = styled(SearchContainer)``;
const StyledHowItWork = styled(HowItWorkInfo)``;
const StyledOpportunity = styled(Opportunity)``;
const StyledLatestJobs = styled(LatestJobContainer)``;
const StyledCareerInsight = styled(CareerInsightContainer)``;
const StyledJobAlert = styled(TopJobAlertContainer)``;
const StyledFooter = styled(Footer)``;

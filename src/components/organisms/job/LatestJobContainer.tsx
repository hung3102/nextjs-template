import { SeeAllButton } from "@/components/atoms/button/SeeAllButton";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { IJobBox, JobBox } from "@/components/molecules/job/JobBox";
import { TextSize } from "@/const/style";
import styled from "styled-components";

type IProps = {
  lastUpdatedText: string;
  jobs: IJobBox[];
};

export const LatestJobContainer = ({ lastUpdatedText, jobs }: IProps) => {
  const firstLineJobs = jobs.slice(0, 2);
  const secondLineJobs = jobs.slice(2, 4);
  const thirdLineJobs = jobs.slice(4, 6);
  const forthLineJobs = jobs.slice(6, 8);

  return (
    <StyledWrap>
      <StyledHead>
        <StyledTitleGroup>
          <StyledTitleText
            title="Latest Tech Jobs Available"
            fontSize={TextSize.HeadingBase}
          ></StyledTitleText>
          <StyledUpdatedText
            text={`Last updated ${lastUpdatedText}`}
            fontSize={TextSize.HeadingMedium}
          ></StyledUpdatedText>
        </StyledTitleGroup>
        <StyledSeeAll
          text="See all jobs"
          onClick={() => {
            console.log("TODOH");
          }}
        ></StyledSeeAll>
      </StyledHead>

      <StyledJobWrap>
        <StyledJobLine>
          {firstLineJobs.map((job) => (
            <StyledJobBox
              companyLogoUrl={job.companyLogoUrl}
              companyName={job.companyName}
              jobPostion={job.jobPostion}
              updatedTimeString={job.updatedTimeString}
              tags={job.tags}
            ></StyledJobBox>
          ))}
        </StyledJobLine>
        <StyledJobLine>
          {secondLineJobs.map((job) => (
            <StyledJobBox
              companyLogoUrl={job.companyLogoUrl}
              companyName={job.companyName}
              jobPostion={job.jobPostion}
              updatedTimeString={job.updatedTimeString}
              tags={job.tags}
            ></StyledJobBox>
          ))}
        </StyledJobLine>
        <StyledJobLine>
          {thirdLineJobs.map((job) => (
            <StyledJobBox
              companyLogoUrl={job.companyLogoUrl}
              companyName={job.companyName}
              jobPostion={job.jobPostion}
              updatedTimeString={job.updatedTimeString}
              tags={job.tags}
            ></StyledJobBox>
          ))}
        </StyledJobLine>
        <StyledJobLine>
          {forthLineJobs.map((job) => (
            <StyledJobBox
              companyLogoUrl={job.companyLogoUrl}
              companyName={job.companyName}
              jobPostion={job.jobPostion}
              updatedTimeString={job.updatedTimeString}
              tags={job.tags}
            ></StyledJobBox>
          ))}
        </StyledJobLine>
      </StyledJobWrap>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 24px;
  gap: 24px;
  width: 1312px;
  height: 85px;
`;
const StyledTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 297px;
  height: 61px;
`;
const StyledTitleText = styled(TitleText)``;
const StyledUpdatedText = styled(GrayText)``;
const StyledSeeAll = styled(SeeAllButton)``;

const StyledJobWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1312px;
  height: 588px;
  align-self: stretch;
`;
const StyledJobLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 1312px;
  height: 135px;
  align-self: stretch;
`;
const StyledJobBox = styled(JobBox)``;

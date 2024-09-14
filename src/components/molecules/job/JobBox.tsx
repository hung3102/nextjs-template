import { CompanyLogo } from "@/components/atoms/logo/CompanyLogo";
import { Tag } from "@/components/atoms/tag/Tag";
import { GrayText } from "@/components/atoms/text/GrayText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { GTag } from "@/const/graphql";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export type IJobBox = {
  companyLogoUrl: string;
  companyName: string;
  jobPostion: string;
  updatedTimeString: string;
  tags: GTag[];
};

export const JobBox = ({
  companyLogoUrl,
  companyName,
  jobPostion,
  updatedTimeString,
  tags,
}: IJobBox) => {
  return (
    <StyledWrap>
      <StyledLogo logoUrl={companyLogoUrl} width={80} height={80}></StyledLogo>

      <StyledInfo>
        <StyledTextAndTime>
          <StyledJobPositionText
            title={jobPostion}
            fontSize={TextSize.HeadingBase}
          ></StyledJobPositionText>
          <StyledCompanyTextAndTime>
            <StyledCompanyText
              text={companyName}
              fontSize={TextSize.BodyMedium}
            ></StyledCompanyText>
            <StyledTimeText text={updatedTimeString}></StyledTimeText>
          </StyledCompanyTextAndTime>
        </StyledTextAndTime>

        <StyledTags>
          {tags.map((tag: GTag) => (
            <StyledTag tag={tag.name} />
          ))}
        </StyledTags>
      </StyledInfo>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  padding: 16px;
  gap: 24px;
  width: 648px;
  min-width: 240px;
  height: 135px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  cursor: pointer;
`;
const StyledLogo = styled(CompanyLogo)``;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 489px;
  min-width: 160px;
  height: 103px;
`;
const StyledTextAndTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 489px;
  height: 59px;
  align-self: stretch;
`;
const StyledJobPositionText = styled(TitleText)``;
const StyledCompanyText = styled(GrayText)``;

const StyledCompanyTextAndTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 489px;
  height: 22px;
  align-self: stretch;
`;
const StyledTimeText = styled(GrayText)`
  display: flex;
  align-items: flex-start;
`;

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
`;
const StyledTag = styled(Tag)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  width: 75px;
  height: 28px;
  background: #f5f5f5;
  border-radius: 8px;
`;

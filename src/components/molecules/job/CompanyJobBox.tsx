import { BlackRightArrow } from "@/assets/images";
import { CompanyLogo } from "@/components/atoms/logo/CompanyLogo";
import { GrayText } from "@/components/atoms/text/GrayText";
import { GCompanyType } from "@/const/graphql";
import { Color } from "@/const/style";
import styled from "styled-components";

export type ICompanyJobBox = {
  companyLogoUrl: string;
  companyName: string;
  companyTypes: GCompanyType[];
  jobCount: number;
  onClick: () => void;
};

export const CompanyJobBox = ({
  companyLogoUrl,
  companyName,
  companyTypes,
  jobCount,
  onClick,
}: ICompanyJobBox) => {
  const typesText = companyTypes
    .map((type: GCompanyType) => type.name)
    .join(" | ");

  return (
    <StyledWrap>
      <StyledCompanyInfo>
        <StyledLogo
          logoUrl={companyLogoUrl}
          width={100}
          height={50}
        ></StyledLogo>
        <StyledCompanyNameAndTypes>
          <StyledCompanyName>{companyName}</StyledCompanyName>
          <StyledCompanyTypes text={typesText}></StyledCompanyTypes>
        </StyledCompanyNameAndTypes>
      </StyledCompanyInfo>

      <StyledJobInfo>
        <StyledJobCount>{`${jobCount} jobs`}</StyledJobCount>
        <StyledSeeAll onClick={onClick}>
          See all job postings
          <StyledArrow></StyledArrow>
        </StyledSeeAll>
      </StyledJobInfo>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 32px;

  width: 421.33px;
  height: 164px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;
const StyledCompanyInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 373.33px;
  height: 68px;

  align-self: stretch;
`;
const StyledLogo = styled(CompanyLogo)``;
const StyledCompanyNameAndTypes = styled.div``;
const StyledCompanyName = styled.div`
  color: #1e1e1e;
`;
const StyledCompanyTypes = styled(GrayText)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 257px;
`;
const StyledJobInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 373.33px;
  height: 32px;

  align-self: stretch;
`;
const StyledJobCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 30px;
  background: ${Color.White};
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #009fb9;
`;
const StyledSeeAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e1e1e;
`;
const StyledArrow = styled(BlackRightArrow)``;

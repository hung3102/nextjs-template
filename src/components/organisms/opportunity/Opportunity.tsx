import { TitleText } from "@/components/atoms/text/TitleText";
import {
  CompanyJobBox,
  ICompanyJobBox,
} from "@/components/molecules/job/CompanyJobBox";
import { LogoList } from "@/components/molecules/logoList/LogoList";
import { TextSize } from "@/const/style";
import styled from "styled-components";

type IProps = {
  logoUrls: string[];
  companies: ICompanyJobBox[];
};

export const Opportunity = ({ logoUrls, companies }: IProps) => {
  const firstLineCompanies = companies.slice(0, 3);
  const secondeLineCompanies = companies.slice(3, 6);

  return (
    <StyledWrap>
      <StyledTitle
        title="Find your next opportunity"
        fontSize={TextSize.TitleBase}
      ></StyledTitle>
      <StyledLogoList urls={logoUrls}></StyledLogoList>

      <StyledCompanyJobWrap>
        <StyledCompanyJobLine>
          {firstLineCompanies.map((company) => (
            <StyledCompanyJob
              companyLogoUrl={company.companyLogoUrl}
              companyName={company.companyName}
              companyTypes={company.companyTypes}
              jobCount={company.jobCount}
              onClick={company.onClick}
            ></StyledCompanyJob>
          ))}
        </StyledCompanyJobLine>
        <StyledCompanyJobLine>
          {secondeLineCompanies.map((company) => (
            <StyledCompanyJob
              companyLogoUrl={company.companyLogoUrl}
              companyName={company.companyName}
              companyTypes={company.companyTypes}
              jobCount={company.jobCount}
              onClick={company.onClick}
            ></StyledCompanyJob>
          ))}
        </StyledCompanyJobLine>
      </StyledCompanyJobWrap>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled(TitleText)``;
const StyledLogoList = styled(LogoList)``;

const StyledCompanyJobWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
  gap: 24px;
  width: 1312px;
  align-self: stretch;
`;
const StyledCompanyJobLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 1312px;
  height: 164px;
`;
const StyledCompanyJob = styled(CompanyJobBox)``;

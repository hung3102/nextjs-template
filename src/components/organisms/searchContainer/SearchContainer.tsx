import { Tag } from "@/components/atoms/tag/Tag";
import { NormalText } from "@/components/atoms/text/NormalText";
import { TitleText } from "@/components/atoms/text/TitleText";
import { SearchBox } from "@/components/molecules/searchBox/SearchBox";
import styled from "styled-components";

export const SearchContainer = () => {
  const jobCount = 146; // TODOH
  return (
    <StyledWrap>
      <StyledBigText
        title="Explore jobs in Japan"
        fontSize={48}
      ></StyledBigText>
      <StyledNormalText
        text={`${jobCount} jobs available. Ready to make an impact?`}
        fontSize={20}
      ></StyledNormalText>
      <StyledSearchAndTag>
        <StyledSearchBox></StyledSearchBox>
        <StyledTags>
          <StyledTag tag="No Japanese required" isChecked={true} />
          <StyledTag tag="Fully Remote" isChecked={true} />
          <StyledTag tag="Visa-Support" isChecked={true} />
          <StyledTag tag="Top Companies" isChecked={true} />
        </StyledTags>
      </StyledSearchAndTag>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const StyledBigText = styled(TitleText)``;
const StyledNormalText = styled(NormalText)``;
const StyledSearchAndTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;
const StyledSearchBox = styled(SearchBox)``;
const StyledTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const StyledTag = styled(Tag)``;

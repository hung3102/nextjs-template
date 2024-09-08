import SvgSearch from "@/assets/images/Search";
import styled from "styled-components";

export const SearchBox = () => {
  return (
    <StyledWrap>
      <StyledInput placeholder="Job title, Company, keywords"></StyledInput>
      <StyledIcon></StyledIcon>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: relative;
  width: 668px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  padding: 0 56px 0 16px;
  width: 100%;
  height: 54px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;
const StyledIcon = styled(SvgSearch)`
  position: absolute;
  right: 16px;
`;

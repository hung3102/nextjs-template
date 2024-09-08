import { Tab } from "@/components/atoms/tab/Tab";
import styled from "styled-components";

export const TabBar = () => {
  // TODOH: process isActive
  return (
    <StyledWrap>
      <StyledTab name="Job Search" isActive={true} />
      <StyledTab name="Companies" />
      <StyledTab name="Career Advice" />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: inline-flex;
`;
const StyledTab = styled(Tab)``;

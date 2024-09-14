import { BlackButton } from "@/components/atoms/button/BlackButton";
import { NormalText } from "@/components/atoms/text/NormalText";
import { TextSize } from "@/const/style";
import styled from "styled-components";

export const TopJobAlertContainer = () => {
  return (
    <StyledWrap>
      <StyledBox>
        <StyledTextWrap>
          <StyledTitle
            text="Sign up for job alerts"
            fontSize={TextSize.HeadingBase}
          ></StyledTitle>
          <StyledDetail
            text="Your journey begins here"
            fontSize={TextSize.HeadingMedium}
          ></StyledDetail>
        </StyledTextWrap>

        <StyledButton
          text="Sign up"
          onClick={() => {
            console.log("TODOH");
          }}
        ></StyledButton>
      </StyledBox>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0px 0px;
  gap: 10px;
  height: 341px;
`;

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  height: 317px;
  padding: 24px 0px 0px;
`;

const StyledTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 61px;
`;
const StyledTitle = styled(NormalText)`
  color: #0862bb;
`;
const StyledDetail = styled(NormalText)``;

const StyledButton = styled(BlackButton)``;

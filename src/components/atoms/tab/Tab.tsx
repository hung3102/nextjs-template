import { Color } from "@/const/style";
import styled from "styled-components";

type IProps = {
  name: string;
  isActive?: boolean;
};

export const Tab = ({ name, isActive }: IProps) => {
  return (
    <StyledWrap isActive={isActive}>
      <StyledText isActive={isActive}>{name}</StyledText>
    </StyledWrap>
  );
};

const StyledWrap = styled.div<{ isActive?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  ${(props) => (props.isActive ? `background: ${Color.White};` : "")}
  border-radius: 8px;
`;

const StyledText = styled.div<{ isActive?: boolean }>`
  font-weight: ${(props) => (props.isActive ? 600 : 400)};
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: center;
  font-weight: 600;
  ${(props) => (props.isActive ? "" : "color: #757575;")};
`;

import styled from "styled-components";

type IProps = {
  text: string;
  fontSize: number;
};

export const NormalText = ({ text, fontSize }: IProps) => {
  return <StyledWrap fontSize={fontSize}>{text}</StyledWrap>;
};

const StyledWrap = styled.div<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  color: #1e1e1e;
`;

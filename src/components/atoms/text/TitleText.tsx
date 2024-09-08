import styled from "styled-components";

type IProps = {
  title: string;
  fontSize: number;
  className?: string;
};

export const TitleText = ({ title, fontSize, className }: IProps) => {
  // const fontSize = type === "medium" ? 24 : 48;
  return (
    <StyledWrap className={className} fontSize={fontSize}>
      {title}
    </StyledWrap>
  );
};

const StyledWrap = styled.div<{ fontSize: number }>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #1e1e1e;
`;

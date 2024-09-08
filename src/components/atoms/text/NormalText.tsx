import styled from "styled-components";

type IProps = {
  text: string;
  fontSize: number;
  onClick?: () => void;
  className?: string;
};

export const NormalText = ({ text, fontSize, className, onClick }: IProps) => {
  return (
    <StyledWrap className={className} fontSize={fontSize} onClick={onClick}>
      {text}
    </StyledWrap>
  );
};

const StyledWrap = styled.div<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  color: #1e1e1e;
`;

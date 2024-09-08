import { TextSize } from "@/const/style";
import styled from "styled-components";

type IProps = {
  text: string;
  fontSize?: number;
  isBold?: boolean;
  className?: string;
};

export const GrayText = ({ className, text, isBold, fontSize }: IProps) => {
  return (
    <StyledWrap className={className} isBold={isBold} fontSize={fontSize}>
      {text}
    </StyledWrap>
  );
};

const StyledWrap = styled.div<{ isBold?: boolean; fontSize?: number }>`
  font-weight: ${(props) => (props.isBold ? 600 : 400)};
  font-size: ${(props) => props.fontSize || TextSize.Medium}px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #757575;
`;

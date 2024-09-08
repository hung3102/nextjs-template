import styled from "styled-components";

type IProps = {
  text: string;
  isBold?: boolean;
  onClick?: () => void;
  className?: string;
};

export const LinkText = ({ text, isBold, onClick, className }: IProps) => {
  return (
    <StyledWrap className={className} onClick={onClick} isBold={isBold}>
      {text}
    </StyledWrap>
  );
};

const StyledWrap = styled.div<{ isBold?: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.isBold ? 600 : 400)};
  color: #009fb9;
`;

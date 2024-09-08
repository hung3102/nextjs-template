import styled from "styled-components";

type IProps = {
  urls: string[];
};

export const LogoList = ({ urls }: IProps) => {
  return (
    <StyledWrap>
      {urls.map((url: string) => {
        return <StyledImg url={url}></StyledImg>;
      })}
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.div<{ url: string }>`
  width: 160px;
  height: 150px;
  background: url(${(props) => props.url}) no-repeat center;
`;

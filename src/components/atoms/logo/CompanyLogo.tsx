import styled from "styled-components";

type Props = {
  logoUrl: string;
  width: number;
  height: number;
};

export const CompanyLogo = ({ logoUrl, width, height }: Props) => {
  return <StyledImg src={logoUrl} width={width} height={height} />;
};

const StyledImg = styled.div<{
  width: number;
  height: number;
  src: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

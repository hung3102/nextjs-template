import React from "react";
import styled from "styled-components";

type IProps = {
  logoComponent: React.ReactElement;
  onClick: () => void;
};
export const SocialLogo = ({ logoComponent, onClick }: IProps) => {
  return <StyledWrap onClick={onClick}>{logoComponent}</StyledWrap>;
};

const StyledWrap = styled.div``;

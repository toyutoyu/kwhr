import styled from "styled-components";

export const StyledInnerSection = styled.div`
  position: relative;
  padding: 0 80px;
`;
export const StyledSectionBlueShapeBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: -100px;
    left: -200px;
    display: flex;
    background-image: url("/images/background/blob_blue_shape.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 1250px;
    z-index: -1;
  }
`;
export const StyledSectionYelllowShapeBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: -100px;
    right: -200px;
    display: flex;
    background-image: url("/images/background/blob_yellow_shape.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 1250px;
    z-index: -1;
  }
`;

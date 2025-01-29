import { MediaSize } from "@/theme/mediaSize";
import styled from "styled-components";

export const StyledInnerSection = styled.div`
  position: relative;
  padding: 0 80px;
  @media screen and (max-width: ${MediaSize.S}) {
    padding: 0 24px;
  }
`;
export const StyledSectionBlueShapeBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 80px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    background-image: url("/images/background/blob_blue_shape.svg");
    background-repeat: no-repeat;
    background-position: left -500px top 0px;
    width: 100%;
    height: 1250px;
    clip-path: inset(0 0 0 0);
    z-index: -1;
  }
`;
export const StyledSectionYelllowShapeBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 80px 0;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    background-image: url("/images/background/blob_yellow_shape.svg");
    background-repeat: no-repeat;
    background-position: right -600px top 0px;
    width: 100%;
    height: 1083px;
    clip-path: inset(0 0 0 0);
    z-index: -1;
    @media screen and (min-width: ${MediaSize.S}) {
      background-position: right -300px top 0px;
    }
  }
`;

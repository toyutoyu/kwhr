import { MediaSize } from "@/theme/mediaSize";
import styled from "styled-components";

export const StyledInnerSection = styled.div`
  position: relative;
  padding: 0 80px;
  @media screen and (max-width: ${MediaSize.S}) {
    padding: 0 24px;
  }
`;

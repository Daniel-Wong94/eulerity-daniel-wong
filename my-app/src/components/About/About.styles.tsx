import styled from "styled-components";

const StyledHeader = styled.h1`
  margin: 12px 24px;
`;

const StyledAboutContainer = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const StyledLinksContainer = styled.span`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  gap: 6px;
`;

export { StyledAboutContainer, StyledHeader, StyledLinksContainer };

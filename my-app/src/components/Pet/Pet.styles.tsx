import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPetContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
`;
const StyledBackButton = styled(Link)`
  margin: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  align-self: flex-start;

  &:visited {
    color: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const StyledPetImage = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* use psuedo to only blur background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) =>
      props.$backgroundImage ? `url(${props.$backgroundImage})` : "none"};
    background-size: cover;
    background-position: center;
    filter: blur(12px);
    overflow: hidden;
    z-index: 1;
  }

  & img {
    max-height: 70%;
    max-width: 70%;
    z-index: 2;
  }
`;

const StyledPetInfo = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & h1 {
    font-weight: 400;
    margin: 12px 0;
  }

  & .description {
    font-weight: 200;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledDownloadButton = styled.button`
  border: 1px solid black;
  background-color: white;
  text-transform: uppercase;
  border-radius: 4px;
  align-self: flex-start;
  padding: 12px 24px;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export {
  StyledPetContainer,
  StyledBackButton,
  StyledPetImage,
  StyledPetInfo,
  StyledDownloadButton,
};

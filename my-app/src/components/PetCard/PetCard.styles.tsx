import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
`;

const Title = styled.p`
  font-size: 1rem;
  margin: 0 0 0 12px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  margin: 6px 0 12px 12px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

const StyledOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  opacity: 0;
  transform: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const StyledSelect = styled.input`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  cursor: pointer;
`;

export {
  CardContainer,
  Title,
  Description,
  Image,
  StyledOverlay,
  StyledSelect,
};

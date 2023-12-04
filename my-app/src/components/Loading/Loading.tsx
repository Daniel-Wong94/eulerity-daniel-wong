import React from "react";
import { StyledLoadingContainer } from "./Loading.styles";

type LoadingProps = {
  message: string;
};

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return <StyledLoadingContainer>{message}</StyledLoadingContainer>;
};

export default Loading;

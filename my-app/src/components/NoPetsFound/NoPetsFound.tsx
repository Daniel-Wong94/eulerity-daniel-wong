import React from "react";
import { StyledNoPetFound } from "./NoPetsFound.styles";

const NoPetsFound = () => {
  return (
    <StyledNoPetFound>
      No Pets Found! (Empty Search term will return all pets)
    </StyledNoPetFound>
  );
};

export default NoPetsFound;

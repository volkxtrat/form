import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Paper from "../../Ui/Paper/Paper";
import { pxToRem } from "../../../theme/utils/functions";
import Typography from "../../Ui/Typography/Typography";

const SyledWrapper = styled.div`
  display: flex;
  min-width: 600px;
  max-width: 600px;
  @media (max-width: 600px) {
    min-width: 400px;
  }
`;
const StyledAuth = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  background: var(--c-bg-main);
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 15% 0;
`;

export default function AuthView({ children }) {
  return (
    <StyledAuth>
      <SyledWrapper>
        <Paper fullWidth offBorderRadius>
          <StyledIcon>
            <Typography variant="h1">
              <i className="fas fa-check-double" />
            </Typography>
          </StyledIcon>
          <StyledBlock>{children}</StyledBlock>
        </Paper>
      </SyledWrapper>
    </StyledAuth>
  );
}

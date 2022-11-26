import styled, { keyframes } from "styled-components";
import { ReactComponent as logo } from "./../assets/icons/logo.svg";

const loading = keyframes`
from {
    top: 50%;
  }
  to {
    top: 40%;
  }
`;

const Loading = styled(logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  & path {
    fill: var(--colorPrimary);
  }
  animation: ${loading} 0.7s infinite alternate ease-out;
`;

export { Loading };

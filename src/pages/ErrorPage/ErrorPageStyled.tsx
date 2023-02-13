import styled from "styled-components";

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 0 60px;

  .error-404 {
    font-size: 4rem;
  }

  .error-text {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export default ErrorPageStyled;

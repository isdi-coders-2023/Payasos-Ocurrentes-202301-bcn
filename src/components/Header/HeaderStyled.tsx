import styled from "styled-components";

const HeaderStyled = styled.div`
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.8rem;
  }

  i {
    color: #fff;
  }

  .header-container__desktop {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.8rem;
    gap: 30px;
    text-transform: capitalize;
  }

  .header-container__title-options {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .header-container__span {
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    width: 100%;
    justify-content: flex-start;
  }

  .desktop__creativity {
    white-space: nowrap;
  }

  @media (min-width: 1000px) {
    .navbar {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    .header-container__desktop {
      display: none;
    }
  }
`;

export default HeaderStyled;

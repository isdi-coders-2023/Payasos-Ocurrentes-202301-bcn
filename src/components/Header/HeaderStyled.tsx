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

  .header-container__span {
    color: #fff;
    font-size: 1.6rem;
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
`;

export default HeaderStyled;

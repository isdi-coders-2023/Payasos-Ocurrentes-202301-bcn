import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  justify-content: center;

  .container__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 352px;
    gap: 15px;
  }

  .form-input {
    border-radius: 15px;
    height: 45px;
    width: 100%;
    padding-left: 15px;
    font-size: 17px;
  }

  button {
    font-family: inherit;
    font-weight: bolder;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: #a259ff;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
  }
`;

export default FormStyled;

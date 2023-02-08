import styled from "styled-components";

const CharacterStyled = styled.div`
  .characterCard {
    width: 200px;
    height: 320px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #3b3b3b;
    border-radius: 25px 25px;
    line-height: 1.5;
    color: white;

    &__info {
      padding-left: 15px;
    }
  }

  h2 {
    padding-left: 15px;
    padding-top: 15px;
  }

  .characterCard__info--specie {
    font-size: 20px;
  }

  .morty {
    border-radius: 25px 25px 0 0;
  }
`;

export default CharacterStyled;

import styled from "styled-components";

const CharacterStyled = styled.div`
  .characterCard {
    width: 300px;
    height: 450px;
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

    &__image {
      border-radius: 25px 25px 0 0;
    }
  }

  h2 {
    padding-left: 15px;
    padding-top: 15px;
  }

  .characterCard__info--specie {
    font-size: 25px;
  }

  .characterCard__info--status {
    font-size: 20px;
  }
`;

export default CharacterStyled;

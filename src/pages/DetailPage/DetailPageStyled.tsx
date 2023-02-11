import styled from "styled-components";

const DetailPageStyled = styled.div`
  h2 {
    padding: 15px 0 25px 0;
  }
  .detail-title {
    color: #fff;
  }

  .detail-info-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;

    &__titles {
      color: #858584;
      font-size: 25px;
    }

    &__data--status {
      font-size: 25px;
      color: white;
      grid-column: 2 / 3;
      grid-row: 1 / 5;
    }

    &__data--species {
      font-size: 28px;
      color: white;
      grid-column: 2 / 3;
      grid-row: 2 / 5;
    }

    &__data--gender {
      font-size: 28px;
      color: white;
      grid-column: 2 / 3;
      grid-row: 3 / 5;
    }

    &__data--origin {
      font-size: 28px;
      color: white;
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }

    &__data--location {
      font-size: 28px;
      color: white;
      grid-column: 2 / 3;
      grid-row: 5 / 5;
    }
  }
`;

export default DetailPageStyled;

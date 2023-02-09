import styled from "styled-components";

const CharacterListStyled = styled.div`
  ul {
    display: grid;
    grid-auto-row: 22rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 3rem;
  }
`;

export default CharacterListStyled;

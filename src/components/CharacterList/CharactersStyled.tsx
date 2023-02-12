import styled from "styled-components";

const CharacterListStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-auto-row: 22rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 3rem;
  }
`;

export default CharacterListStyled;

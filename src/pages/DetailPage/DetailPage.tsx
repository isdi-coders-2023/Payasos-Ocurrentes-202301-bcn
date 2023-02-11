import { CharacterStructure } from "../../data/types";
import DetailPageStyled from "./DetailPageStyled";

export const DetailPage = (): JSX.Element => {
  const test: CharacterStructure = {
    name: "Morty Smith",
    id: 2,
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
    },
    location: {
      name: "Citadel of Ricks",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };
  return (
    <DetailPageStyled>
      <>
        <img
          src={test.image}
          alt={test.name}
          className="detail-image"
          width="300"
          height="300"
        />
        <h2 className="detail-title">{test.name}</h2>
        <div className="detail-info-container">
          <span className="detail-info-container__titles">Status</span>
          <span className="detail-info-container__titles">Species</span>
          <span className="detail-info-container__titles">Gender</span>
          <span className="detail-info-container__titles">Origin</span>
          <span className="detail-info-container__titles">Location</span>

          <span className="detail-info-container__data--status">
            {test.status}
          </span>
          <span className="detail-info-container__data--species">
            {test.species}
          </span>
          <span className="detail-info-container__data--gender">
            {test.gender}
          </span>
          <span className="detail-info-container__data--origin">
            {test.origin.name}
          </span>
          <span className="detail-info-container__data--location">
            {test.location.name}
          </span>
        </div>
      </>
    </DetailPageStyled>
  );
};

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import UiContext from "../../store/contexts/ui/UiContext";
import DetailPageStyled from "./DetailPageStyled";

export const DetailPage = (): JSX.Element => {
  const { getSingleCharacter } = useApi();
  const { isLoading } = useContext(UiContext);

  let { id } = useParams();

  useEffect(() => {
    getSingleCharacter(Number(id));
  }, [getSingleCharacter, id]);

  const {
    characters: {
      results: [{ gender, image, location, name, origin, species, status }],
    },
  } = useContext(CharactersContext);

  const controlHorizontalOVerflow = () => {
    const locationLength = 11;
    return location.name.length > locationLength ? "overFlowX" : "";
  };

  return (
    <DetailPageStyled>
      {!isLoading && (
        <>
          <div className="container-detail-page">
            <img
              src={image}
              alt={name}
              className="detail-image"
              width="300"
              height="300"
            />
            <h2 className="detail-title">{name}</h2>
            <div className="detail-info-container">
              <span className="detail-info-container__titles">Status</span>
              <span className="detail-info-container__titles">Species</span>
              <span className="detail-info-container__titles">Gender</span>
              <span className="detail-info-container__titles">Origin</span>
              <span className="detail-info-container__titles">Location</span>

              <span className="detail-info-container__data--status">
                {status}
              </span>
              <span className="detail-info-container__data--species">
                {species}
              </span>
              <span className="detail-info-container__data--gender">
                {gender}
              </span>
              <span className="detail-info-container__data--origin">
                {origin.name}
              </span>
              <span
                className={`detail-info-container__data--location ${controlHorizontalOVerflow()}`}
              >
                {location.name}
              </span>
            </div>
          </div>
        </>
      )}
    </DetailPageStyled>
  );
};

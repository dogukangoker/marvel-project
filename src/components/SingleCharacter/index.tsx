import React from "react";
import "./style.scss";

interface ICharacterProps {
  character: any;
}
const SingleCharacter = ({ character }: ICharacterProps) => {
  return (
    <div className="marvel-character">
      {character.map((character: any) => (
        <div className="marvel-character__card" key={character.id}>
          <div className="marvel-character__card__name">
            <span className="marvel-character__card__name__text">
              {character.name}
            </span>
          </div>
          <div className="marvel-character__card__image">
            <img
              className="marvel-character__card__img"
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
            />
          </div>
          {character.comics.items.slice(0, 1).map((item: any) => (
            <div key={item.resourceURI}>{item.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SingleCharacter;

import React from "react";
import Place from "../../../models/Place";
import { onEnter } from "../../../utils/helpers";

const PlaceCard: React.FC<{
  place: Place;
  onClick: (event: any) => void;
  selected: boolean;
}> = ({ place: { imageUrl, ...place }, onClick, selected }) => {
  return (
    /* eslint-disable */
    <li
      data-id={place.id}
      className={`place ${selected ? "selected" : ""}`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onEnter(onClick)}
    >
      {/* eslint-enable */}
      {imageUrl && <img alt={place.title} src={imageUrl} height={165} />}
      <div className="place--content">
        <h2>{place.title}</h2>
        <h3>{place.address}</h3>
        <p>{place.description}</p>
      </div>
    </li>
  );
};

export default PlaceCard;

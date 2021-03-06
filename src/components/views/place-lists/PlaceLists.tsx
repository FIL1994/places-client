import React from "react";
import { Link } from "react-router-dom";
import { usePlaceLists } from "../../../hooks/requestHooks";
import CreatePlaceList from "./CreatePlaceList";
import { PhotoUtils } from "../../../utils/photoUtils";
import emptyImage from "../../../../public/assets/empty.png";
import "./place-lists.less";

const PlaceLists = () => {
  const { loading, error, placeLists } = usePlaceLists();

  if (loading) return null;
  if (error)
    return (
      <p>
        Error!
        <br />
        {error.message}
      </p>
    );

  return (
    <div
      style={{
        marginTop: 15,
        width: "100%"
      }}
    >
      <CreatePlaceList style={{ marginBottom: 15 }} />
      {placeLists.length === 0 ? (
        "You don't have any place lists yet."
      ) : (
        <ul className="place-lists">
          {placeLists.map(({ id, title, ...place }) => {
            const imgSrc =
              place.places.length > 0
                ? PhotoUtils.photoUrl(place.places[0])
                : emptyImage;

            return (
              <li key={id}>
                <Link to={`/places/${id}`} className="place-list">
                  <img alt={title} src={imgSrc} height={165} />
                  <div className="place-list--content">
                    <h2>{title}</h2>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PlaceLists;

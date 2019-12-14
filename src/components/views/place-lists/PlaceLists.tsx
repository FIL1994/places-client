import React from "react";
import { Link } from "react-router-dom";
import { usePlaceLists } from "../../../hooks/requestHooks";
import CreatePlaceList from "./CreatePlaceList";

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
          {placeLists.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/places/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PlaceLists;

import React from "react";
import { Link } from "react-router-dom";
import { usePlaceLists } from "../hooks/requestHooks";

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
    <ul className="place-lists">
      {placeLists.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/places/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PlaceLists;

import React from "react";
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
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
};

export default PlaceLists;

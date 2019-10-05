import * as React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { PlacesMapContext } from "../App";
import "./place-form.less";

const ADD_PLACE = gql`
  mutation AddPlace(
    $title: String!
    $description: String
    $address: String!
    $imageUrls: [String!]
    $lat: Float!
    $lng: Float!
  ) {
    addPlace(
      place: {
        title: $title
        description: $description
        address: $address
        imageUrls: $imageUrls
        lat: $lat
        lng: $lng
      }
    ) {
      id
    }
  }
`;

const PlaceForm: React.FunctionComponent = () => {
  const isMapLoaded = React.useContext(PlacesMapContext);
  const history = useHistory();
  const [addPlace] = useMutation(ADD_PLACE);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [googleAutocomplete, setGoogleAutocomplete] = React.useState<
    /* eslint-disable no-undef */
    google.maps.places.Autocomplete
  >();
  const [address, setAddress] = React.useState("");
  const [lat, setLat] = React.useState();
  const [lng, setLng] = React.useState();

  React.useEffect(() => {
    if (!googleAutocomplete) return;

    google.maps.event.addListener(googleAutocomplete, "place_changed", () => {
      const place = googleAutocomplete.getPlace();

      setAddress(place.formatted_address);
      setLat(place.geometry.location.lat());
      setLng(place.geometry.location.lng());
      if (imageUrl.trim().length < 1 && place.photos) {
        setImageUrl(place.photos[0].getUrl({}));
      }
    });
  }, [googleAutocomplete]);

  if (!isMapLoaded) return null;
  return (
    <div className="place-form">
      <form
        onSubmit={async e => {
          e.preventDefault();

          try {
            await addPlace({
              variables: {
                title,
                description,
                imageUrls: [imageUrl],
                address,
                lat,
                lng
              }
            });
            history.push("/");
          } catch (e) {}
        }}
      >
        <TextField
          autoFocus
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          ref={async ref => {
            if (!ref || googleAutocomplete) return;

            const input = ref.querySelector("input");
            if (input) {
              const autocomplete = new window.google.maps.places.Autocomplete(
                input
              );
              autocomplete.setFields([
                "geometry",
                "formatted_address",
                "photos"
              ]);
              setGoogleAutocomplete(autocomplete);
            } else {
              /* eslint-disable no-console */
              console.warn("could not find input");
            }
          }}
          label="Address"
        />
        <TextField
          label="Image URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          multiline
          rows="4"
        />
        <Button variant="contained" color="primary" type="submit">
          Add Place
        </Button>
      </form>
    </div>
  );
};

export default PlaceForm;

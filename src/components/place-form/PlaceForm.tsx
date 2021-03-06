import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAddPlace } from "../../hooks/requestHooks";
import { PlacesContext } from "../views/places-list/PlaceList";
import "./place-form.less";

const PlaceForm: React.FC = () => {
  const { setIsModalOpen, id } = React.useContext(PlacesContext);
  const [addPlace] = useAddPlace();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [googleAutocomplete, setGoogleAutocomplete] = React.useState<
    google.maps.places.Autocomplete
  >();
  const [address, setAddress] = React.useState("");
  const [lat, setLat] = React.useState<number>();
  const [lng, setLng] = React.useState<number>();
  const [googleId, setGoogleId] = useState<string>();

  React.useEffect(() => {
    if (!googleAutocomplete) return;

    window.google.maps.event.addListener(
      googleAutocomplete,
      "place_changed",
      () => {
        const place = googleAutocomplete.getPlace();

        setAddress(place.formatted_address);
        setLat(place.geometry.location.lat());
        setLng(place.geometry.location.lng());
        setTitle(currentTitle => {
          if (currentTitle.trim().length === 0) return place.name;
          return currentTitle;
        });
        setGoogleId(place.place_id);
      }
    );
  }, [googleAutocomplete]);

  return (
    <form>
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
              "name",
              "place_id"
            ]);
            setGoogleAutocomplete(autocomplete);
          } else {
            /* eslint-disable no-console */
            console.warn("could not find input");
            /* eslint-enable no-console */
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
      <Button
        variant="contained"
        color="primary"
        onClick={async event => {
          event.preventDefault();

          await addPlace({
            variables: {
              title,
              description,
              imageUrl,
              address,
              lat,
              lng,
              placeListId: id,
              googleId
            }
          });
          setIsModalOpen(false);
        }}
      >
        Add Place
      </Button>
    </form>
  );
};

export default PlaceForm;

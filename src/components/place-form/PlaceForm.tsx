import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AppContext } from "../App";
import { useAddPlace } from "../../hooks/requestHooks";
import { PlacesContext } from "../pages/places-list/PlaceList";
import "./place-form.less";

const PlaceForm: React.FunctionComponent = () => {
  const { setIsModalOpen, id } = React.useContext(PlacesContext);
  const isMapLoaded = React.useContext(AppContext);
  const [addPlace] = useAddPlace();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [googleAutocomplete, setGoogleAutocomplete] = React.useState<
    google.maps.places.Autocomplete
  >();
  const [address, setAddress] = React.useState("");
  const [lat, setLat] = React.useState();
  const [lng, setLng] = React.useState();

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
        if (imageUrl.trim().length < 1 && place.photos) {
          setImageUrl(place.photos[0].getUrl({}));
        }
      }
    );
  }, [googleAutocomplete]);

  if (!isMapLoaded) return null;
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
            autocomplete.setFields(["geometry", "formatted_address", "photos"]);
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
              imageUrls: [imageUrl],
              address,
              lat,
              lng,
              placeListId: id
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

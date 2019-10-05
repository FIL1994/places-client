import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./place-form.less";

const PlaceForm: React.FunctionComponent = () => {
  const [title, setTitle] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  return (
    <div className="place-form">
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <TextField
          autoFocus
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          label="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          multiline
          rows="2"
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

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import CreateInput from "../../elements/CreateInput";
import { useAddPlaceList } from "../../../hooks/requestHooks";

const CreatePlaceList: React.FC<Omit<
  React.ComponentProps<typeof CreateInput>,
  "placeholder" | "icon" | "value" | "onChange"
>> = props => {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [focused, setFocused] = useState(false);
  const [addPlaceList] = useAddPlaceList();

  async function onSubmit() {
    const { data, errors } = await addPlaceList({
      variables: {
        title: name
      }
    });

    if (errors) return;

    history.push(`/places/${data.addPlaceList.id}`);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (name.trim().length === 0) return;

        onSubmit();
      }}
    >
      <CreateInput
        {...props}
        placeholder={focused ? "Enter a title" : "Add a place list"}
        icon={AddIcon}
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </form>
  );
};

export default CreatePlaceList;

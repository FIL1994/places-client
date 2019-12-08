import React from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import CreateInput from "../elements/CreateInput";
import { useAddPlaceList } from "../../hooks/requestHooks";

const CreatePlaceList: React.FC<Omit<
  React.ComponentProps<typeof CreateInput>,
  "placeholder" | "icon" | "value" | "onChange"
>> = props => {
  const history = useHistory();
  const [name, setName] = React.useState("");
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
        placeholder="Add place list"
        icon={AddIcon}
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
    </form>
  );
};

export default CreatePlaceList;

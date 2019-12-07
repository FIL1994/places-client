import * as React from "react";
import Places from "../../Places";
import Map from "../../Map";
import ActionBar from "../ActionBar";
import PlacesModal from "./PlaceModal";
import { useParams } from "react-router-dom";

type SetStateFunc<T> = React.Dispatch<React.SetStateAction<T>>;

interface IPlacesContext {
  selectedPlaceId: number;
  setSelectedPlaceId: SetStateFunc<number>;
  map: google.maps.Map;
  setMap: SetStateFunc<google.maps.Map>;
  isModalOpen: boolean;
  setIsModalOpen: SetStateFunc<boolean>;
  id: string;
}

export const PlacesContext = React.createContext<IPlacesContext>(undefined);
PlacesContext.displayName = "PlacesContext";

const PlaceList: React.FC = () => {
  const { id } = useParams();
  const [selectedPlaceId, setSelectedPlaceId] = React.useState<number>();
  const [map, setMap] = React.useState<google.maps.Map>();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <PlacesContext.Provider
      value={{
        selectedPlaceId,
        setSelectedPlaceId,
        map,
        setMap,
        isModalOpen,
        setIsModalOpen,
        id
      }}
    >
      <div
        style={{
          marginTop: 16
        }}
      >
        <ActionBar />
        <Places />
      </div>
      <Map />
      <PlacesModal />
    </PlacesContext.Provider>
  );
};

export default PlaceList;

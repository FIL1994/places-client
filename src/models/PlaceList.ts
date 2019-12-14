import Place from "./Place";

export default interface PlaceList {
  id: number;
  user: any;
  title: string;
  places: Place[];
  imageUrl?: string;
}

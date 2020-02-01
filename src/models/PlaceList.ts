import Place from "./Place";
import User from "./User";

export default interface PlaceList {
  id: number;
  user: Partial<User>;
  title: string;
  places: Place[];
}

import { useContext } from "react";
import { AppContext } from "../components/App";

export function useUser() {
  const { user } = useContext(AppContext);
  return user;
}

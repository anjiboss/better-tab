import React from "react";
import { type IStick } from "../types/types";

interface IAppContext {
  sticks: IStick[];
  setSticks?: React.Dispatch<React.SetStateAction<IStick[]>>;
  insertOrUpdateAndSave?: (stickToUpdate: IStick) => void;
}
const AppContext = React.createContext<IAppContext>({
  sticks: [],
});

export default AppContext;

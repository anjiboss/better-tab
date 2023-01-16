/* eslint-disable @typescript-eslint/no-empty-function */
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { type IStick } from "../types/types";
import AppContext from "../context/AppContext";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const [sticks, setSticks] = useState<IStick[]>([]);
  // const {
  //   insertOrUpdateAndSave,
  //   // selectedStick, selectStick, unselectStick
  // } = useStick(sticks);
  const _sticks = api.sticks.sticks.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    console.log(_sticks);
  });

  return (
    <AppContext.Provider value={{ sticks, setSticks, insertOrUpdateAndSave: () => {} }}>
      <div>
        {/* <ToolBar> */}
        {/* <ToolBar /> */}
        {/* Show Sticks */}
        {/* <DesktopCanvas sticks={sticks} /> */}
      </div>
    </AppContext.Provider>
  );
};

export default Home;

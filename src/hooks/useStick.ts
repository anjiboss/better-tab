import { useState } from "react";
import { KEY } from "../constant/default";
import { type Stick } from "@prisma/client";

export const useStick = (sticks: Stick[]) => {
  const [selectedStick, setSeletectStick] = useState<Stick[]>([]);

  const updateToSever = (sticks: Stick[]) => {
		// something
  };

  const insertOrUpdateAndSave = (stickToUpdate: Stick) => {
    const oldStick = sticks.filter((stick) => stick.id !== stickToUpdate.id);
    window.localStorage.setItem(
      KEY,
      JSON.stringify([...oldStick, { ...stickToUpdate, updatedAt: new Date() }])
    );
    updateToSever([...oldStick, stickToUpdate]);
    console.log("DB updated for stick: ", stickToUpdate.title);
  };

  const selectStick = (stick: Stick, isMultiple: boolean) => {
    setSeletectStick((prev) => {
      if (selectedStick.find((_s) => _s.id === stick.id)) {
        return prev;
      } else {
        return isMultiple ? [...prev, stick] : [stick];
      }
    });
  };

  const unselectStick = (stick: Stick) => {
    setSeletectStick((prev) => {
      if (!selectedStick.find((_s) => _s.id === stick.id)) {
        return prev;
      } else {
        return prev.filter((_s) => _s.id !== stick.id);
      }
    });
  };

  return {
    insertOrUpdateAndSave,
    selectedStick,
    selectStick,
    unselectStick,
  };
};

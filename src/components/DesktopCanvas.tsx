import React, { useState } from "react";
import { Layer, Stage } from "react-konva";
import { type IStick } from "../types/types";
import Stick from "./Stick";
import { isURL } from "../utils/utils";

interface DesktopCanvasProps {
  children?: React.ReactNode;
  sticks: IStick[];
}

const DesktopCanvas: React.FC<DesktopCanvasProps> = ({ sticks }) => {
  const [bgImg] = useState("https://images6.alphacoders.com/651/651136.jpg");
  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          border: "1px solid black",
          background: isURL(bgImg) ? `url(${bgImg})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Layer>
          {sticks.map((stick) => (
            <Stick key={stick.id} stick={stick} />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
export default DesktopCanvas;

import React from 'react'
import { Stage, Layer, Text } from "react-konva";

interface Props{
  width: number;
  height: number;
}

const Canvas: React.FC<Props> = (props: Props) => {
  const { width, height } = props;
  return (
    <Stage width={width} height={height}>
      <Layer>

      </Layer>
    </Stage>
  )
};

export default Canvas;
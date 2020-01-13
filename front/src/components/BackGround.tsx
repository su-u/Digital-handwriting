import React from 'react';
import { Rect } from 'react-konva';

interface Props{
  width: number;
  height: number;
}

const BackGround: React.FC<Props> = (props: Props) => {
  const { width, height } = props;
  return (
    <Rect
      x={0}
      y={0}
      width={width}
      height={height}
      fill={'white'}
    />
    )
};

export default BackGround;
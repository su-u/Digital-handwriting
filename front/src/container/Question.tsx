import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Text, Line } from "react-konva";
import { Link, RouteComponentProps } from 'react-router-dom';
import Button from '../components/Button'


type Props = {} & RouteComponentProps<{ id: number }>;

const Question:React.FC<Props> = (props: Props) => {
  const { id } = props.match.params;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [lines, setLines] = React.useState([]);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const stageRef = React.useRef(null);

  const handleMouseDown = () => {
    setIsDrawing(true);
    // add line
    setLines([...lines, []]);
  };

  const handleMouseMove = e => {
    // no drawing - skipping
    if (!isDrawing) {
      return;
    }
    const stage = stageRef.current.getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];
    // add point
    lastLine = lastLine.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <>
      <Button.Black inlineText={`${id}`} />
      <QuestionText>
        問題：
      </QuestionText>
      <Link to={'/score'}>score</Link>
      <Stage
        width={width}
        height={height}
        onContentMousedown={handleMouseDown}
        onContentMousemove={handleMouseMove}
        onContentMouseup={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          <Text text={'aaa'} />
          {lines.map((line, i) => (
            <Line key={i} points={line} stroke="red" />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

const QuestionText = styled.div`
  background-color: black;
  color: white;
  font-size: 36px;
`;




export default Question;

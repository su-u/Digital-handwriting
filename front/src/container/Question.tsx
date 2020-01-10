import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Text, Line } from 'react-konva';
import { Link, RouteComponentProps } from 'react-router-dom';
import Button from '../components/Button';
import { sendCloudVision } from '@/utility/CloudVisionApi';

type Props = {} & RouteComponentProps<{ id: number }>;

const Question: React.FC<Props> = (props: Props) => {
  const { id } = props.match.params;
  const width = window.innerWidth;
  const height = window.innerHeight * 0.7;
  const [lines, setLines] = React.useState([]);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const stageRef = React.useRef([]);
  const [img, setImg] = React.useState('');

  const NextTo = (current: number): string => {
    const num = parseInt(current);
    if (num < 3) {
      return `/question/${num + 1}`;
    } else {
      return '/score';
    }
  };

  const Reset = () => {
    setLines([]);
  };

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

  const NextPage = () => {
    const img = stageRef.current.toDataURL({
      mimeType: 'image/png',
      quality: 0,
      pixelRatio: 2,
    });
    console.log(img);
    sendCloudVision(img.slice(23)).then(r => console.log(r));
    setLines([]);
    setImg(img);
  };

  return (
    <>
      <QuestionText>問題{id}：</QuestionText>
      <Link to={'/score'}>{}</Link>
      <Stage
        width={width}
        height={height}
        onContentMousedown={handleMouseDown}
        onContentMousemove={handleMouseMove}
        onContentMouseup={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {/*<Text text={img} />*/}
          {lines.map((line, i) => (
            <Line key={i} points={line} stroke="black" />
          ))}
        </Layer>
      </Stage>
      <div onClick={NextPage}>
        <Button.Red inlineText={'次へ'} to={NextTo(id)} />
      </div>
      <div onClick={Reset}>
        <Button.Green inlineText={'リセット'} />
      </div>
      <img src={img} />
    </>
  );
};

const QuestionText = styled.div`
  background-color: black;
  color: white;
  font-size: 36px;
`;

export default Question;

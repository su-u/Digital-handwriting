import React from 'react';
import styled from 'styled-components';
import { Stage, Layer, Line } from 'react-konva';
import { Link } from 'react-router-dom';
import Button from './Button';
import { sendCloudVision } from '@/utility/CloudVisionApi';
import BackGround from '@/components/BackGround';
import { QuestionType } from '@/type/QuestionType';
import * as QuestionActions from '@/actions/Question';

type Props = {
  num: string;
  questionData: QuestionType[];
  question_actions: typeof QuestionActions;
};

const Question: React.FC<Props> = (props: Props) => {
  const num = parseInt(props.num);
  const { question_actions, questionData } = props;
  const width = window.innerWidth;
  const height = window.innerHeight * 0.7;
  const [lines, setLines] = React.useState([]);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const stageRef = React.useRef([]);
  const [img, setImg] = React.useState('');

  const NextTo = (current: number): string => {
    const num = current;
    if (num < 2) {
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
      quality: 1,
      pixelRatio: 2,
    }).slice(22);
    console.log(img);
    sendCloudVision(img).then(r => {
      console.log(num);
      switch (num) {
        case 0:
          console.log('sq');
          question_actions.Ans0(img, r.responses[0].fullTextAnnotation.text, questionData[0].ans);
          break;
        case 1:
          question_actions.Ans1(img, r.responses[0].fullTextAnnotation.text, questionData[1].ans);
          break;
        case 2:
          question_actions.Ans2(img, r.responses[0].fullTextAnnotation.text, questionData[2].ans);
          break;
      }
      console.log({r});
      console.log(r.responses[0].fullTextAnnotation.text);
    });
    setLines([]);
    setImg(`data:image/png;base64,${img}`);
  };

  return (
    <>
      <QuestionText>問題{num + 1}：</QuestionText>
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
          <BackGround width={width} height={height}/>
          {/*<Text text={img} />*/}
          {lines.map((line, i) => (
            <Line key={i} points={line} stroke="black" strokeWidth={8}/>
          ))}
        </Layer>
      </Stage>
      <div onClick={NextPage}>
        <Button.Red inlineText={'次へ'} to={NextTo(num)} />
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

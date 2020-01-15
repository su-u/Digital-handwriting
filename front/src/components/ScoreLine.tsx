import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  result: string;
  ans: string;
  score: number;
}

const ScoreLine: React.FC<Props> = (props: Props) => {
  const { img, result, ans, score } = props;
  return (
    <Wrapper>
      <img src={img} />
      <p>解答：{result}</p>
      <p>答え：{ans}</p>
      <p>{score}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #e1e1e1;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  > img {
    width: 30%;
  }
`;

export default ScoreLine;

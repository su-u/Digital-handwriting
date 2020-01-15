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
      <MainBlock>
        <p>あなたの解答：{result}</p>
        <p>　　　　答え：{ans}</p>
        <p>　　　スコア：{score}</p>
      </MainBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  background: #e1e1e1;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  padding: 5px;
  > img {
    vertical-align: middle;
    width: 30%;
    height: 90%;
  }
`;

const MainBlock = styled.div`
  display: inline-block;
  width: 60%;
  padding-left: 10px;
`;

export default ScoreLine;

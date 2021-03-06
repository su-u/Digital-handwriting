import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { QuestionType } from '@/type/QuestionType';
import * as QuestionActions from '@/actions/Question';
import ScoreLine from '@/components/ScoreLine';
import Button from '@/components/Button';

interface Props {
  questionData: QuestionType[];
  question_actions: typeof QuestionActions;
}

const ScoreContainer: React.FC<Props> = (props: Props) => {
  const { questionData } = props;
  console.log({ questionData });
  const sum = questionData[0].score + questionData[1].score + questionData[2].score;
  return (
    <Wrapper>
      <PageTitle>結果</PageTitle>
      <ScoreWrapper>
        <ScoreLine
          img={questionData[0].img}
          result={questionData[0].result}
          ans={questionData[0].ans}
          score={questionData[0].score}
        />
        <ScoreLine
          img={questionData[1].img}
          result={questionData[1].result}
          ans={questionData[1].ans}
          score={questionData[1].score}
        />
        <ScoreLine
          img={questionData[2].img}
          result={questionData[2].result}
          ans={questionData[2].ans}
          score={questionData[2].score}
        />
        <SumScore>合計：{sum}</SumScore>
      </ScoreWrapper>
      <Button.Red inlineText={'はじめに戻る'} to={'/'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const PageTitle = styled.h1`
  margin: 10px auto;
  text-align: center;
`;

const ScoreWrapper = styled.div``;

const SumScore = styled.div`
  margin: 15px;
  margin-right: 15%;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
`;

const mapStateToProps = (state: any) => {
  return {
    questionData: state.app.get('questionData'),
  };
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    question_actions: bindActionCreators(QuestionActions, dispatch),
  };
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);

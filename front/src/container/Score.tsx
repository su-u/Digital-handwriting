import React from 'react';
import styled from 'styled-components';
import { QuestionType } from '@/type/QuestionType';
import {bindActionCreators, Dispatch} from 'redux';
import * as QuestionActions from '@/actions/Question';
import {connect} from "react-redux";


interface Props {
  questionData: QuestionType[];
  question_actions: typeof QuestionActions;
}

const ScoreContainer: React.FC<Props> = (props: Props) => {
  const { questionData } = props;
  console.log({questionData});
  return (
    <Wrapper>
      <PageTitle>結果</PageTitle>
      <ScoreWrapper></ScoreWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const PageTitle = styled.h1`
  margin: 20px auto;
  text-align: center;
`;

const ScoreWrapper = styled.div``;

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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreContainer);


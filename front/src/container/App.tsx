import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import {bindActionCreators, Dispatch} from "redux";
import * as QuestionActions from '@/actions/Question';
import {connect} from 'react-redux';

interface Props{
  question_actions: typeof QuestionActions;
}

const App = (props:Props) => {
  const { question_actions } = props;
  question_actions.InitQuestion();
  return (
    <>
      <Button.Red inlineText={'はじめる'} to={'/question/0'} />
      <Link to={'/score'}>score</Link>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    question_actions: bindActionCreators(QuestionActions, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
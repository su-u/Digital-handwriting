import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as QuestionActions from '@/actions/Question';
import Question from '@/components/Question';
import { QuestionType } from '@/type/QuestionType';

type Props = {
  questionData: QuestionType[];
} & RouteComponentProps<{ id: string }>;

export class QuestioContainer extends React.Component<Props> {
  render() {
    const { id } = this.props.match.params;
    const { questionData } = this.props;
    return (
      <>
        <Question num={id} question={questionData}/>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    questionData: state.app.get('questionData'),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    question_actions: bindActionCreators(QuestionActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestioContainer);

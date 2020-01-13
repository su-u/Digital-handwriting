import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from "redux";
import Question from '@/components/Question';
import { QuestionType } from '@/type/QuestionType';
import * as QuestionActions from '@/actions/Question';

type Props = {
  questionData: QuestionType[];
  question_actions: typeof QuestionActions;
} & RouteComponentProps<{ id: string }>;

export class QuestioContainer extends React.Component<Props> {
  render() {
    const { id } = this.props.match.params;
    const { questionData, question_actions } = this.props;
    return (
      <>
        <Question num={id} questionData={questionData} question_actions={question_actions} />
      </>
    );
  }
}

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
)(QuestioContainer);

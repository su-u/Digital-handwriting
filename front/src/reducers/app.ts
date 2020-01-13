import { Map } from 'immutable';
import { QuestionActions } from '../actions';
import { QuestionType } from '@/type/QuestionType';

export default function(state: any, action: any) {
  switch (action.type) {
    case QuestionActions.INIT_STATE:
      return state.setState('questionData', action.questionData);
      break;
    case QuestionActions.QUESTION_0:
        const newData1: QuestionType[] = [
          action.questionData,
          state.get('questionData')[1],
          state.get('questionData')[2]
        ];
        return state.setState('questionData', newData1);
      break;
    case QuestionActions.QUESTION_1:
      const newData2: QuestionType[] = [
        state.get('questionData')[0],
        action.questionData,
        state.get('questionData')[2]
      ];
      return state.setState('questionData', newData2);
      break;
    case QuestionActions.QUESTION_2:
      const newData3: QuestionType[] = [
        state.get('questionData')[0],
        state.get('questionData')[1],
        action.questionData
      ];
      return state.setState('questionData', newData3);
      break;
    default:
  }
  return state || Map({ questionData: [] });
}
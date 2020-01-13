import { Map } from 'immutable';
import { QuestionActions } from '../actions';
import { QuestionType } from '@/type/QuestionType';

const init_state = Map({ 'questionData': [] });

export default function(state: any = init_state, action: any) {
  console.log(state);
  switch (action.type) {
    case QuestionActions.INIT_STATE:
      return state.set('questionData', action.questionData);
    case QuestionActions.QUESTION_0:
        const newData1: QuestionType[] = [
          action.questionData,
          state.get('questionData')[1],
          state.get('questionData')[2]
        ];
        return state.set('questionData', newData1);
    case QuestionActions.QUESTION_1:
      const newData2: QuestionType[] = [
        state.get('questionData')[0],
        action.questionData,
        state.get('questionData')[2]
      ];
      console.log(newData2);
      return state.set('questionData', newData2);
    case QuestionActions.QUESTION_2:
      const newData3: QuestionType[] = [
        state.get('questionData')[0],
        state.get('questionData')[1],
        action.questionData
      ];
      return state.set('questionData', newData3);
    default:
  }
  return state || Map({ questionData: [] });
}
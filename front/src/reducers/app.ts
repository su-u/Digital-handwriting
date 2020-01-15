import { Map } from 'immutable';
import { QuestionActions } from '../actions';
import { QuestionType } from '@/type/QuestionType';

const init_state = Map({ questionData: [] });

export default function(state: any = init_state, action: any) {
  switch (action.type) {
    case QuestionActions.INIT_STATE:
      return state.set('questionData', action.questionData);
    case QuestionActions.QUESTION_0:
      const newData1: QuestionType[] = [
        {
          img: action.questionData0.img,
          ans: state.get('questionData')[0].ans,
          result: action.questionData0.result,
          score: action.questionData0.score,
        },
        state.get('questionData')[1],
        state.get('questionData')[2],
      ];
      return state.set('questionData', newData1);
    case QuestionActions.QUESTION_1:
      const newData2: QuestionType[] = [
        state.get('questionData')[0],
        {
          img: action.questionData1.img,
          ans: state.get('questionData')[1].ans,
          result: action.questionData1.result,
          score: action.questionData1.score,
        },
        state.get('questionData')[2],
      ];
      return state.set('questionData', newData2);
    case QuestionActions.QUESTION_2:
      const newData3: QuestionType[] = [
        state.get('questionData')[0],
        state.get('questionData')[1],
        {
          img: action.questionData2.img,
          ans: state.get('questionData')[2].ans,
          result: action.questionData2.result,
          score: action.questionData2.score,
        },
      ];
      return state.set('questionData', newData3);
    default:
  }
  return state || Map({ questionData: [] });
}

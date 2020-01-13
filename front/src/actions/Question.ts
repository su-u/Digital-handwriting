import { QuestionType } from '@/type/QuestionType';
import QuestionList from '@/utility/QuestionList';
import { QuestionActions as type } from "../actions";
import getRandomInt from '@/utility/Random';

export const InitQuestion = () => {
  const q0: QuestionType = {
    img:'',
    ans: QuestionList[getRandomInt(QuestionList.length)],
    result: '',
    score: 0
  };
  const q1: QuestionType = {
    img:'',
    ans: QuestionList[getRandomInt(QuestionList.length)],
    result: '',
    score: 0
  };
  const q2: QuestionType = {
    img:'',
    ans: QuestionList[getRandomInt(QuestionList.length)],
    result: '',
    score: 0
  };
  const questionData: QuestionType[]= [
    q0, q1, q2
  ];

  return {
    type: type.INIT_STATE,
    questionData: questionData,
  };
};

export const Ans0 = (img: string, result: string, ans: string) => {
  console.log('ans0');
  const newQuestion = {
    img: img,
    asn: ans,
    result: result,
    score: 1
  };
  return {
    type: type.QUESTION_0,
    questionData: newQuestion
  };
};


export const Ans1 = (img: string, result: string, ans: string) => {
  const newQuestion = {
    img: img,
    asn: ans,
    result: result,
    score: 1
  };
  return {
    type: type.QUESTION_1,
    questionData: newQuestion
  };
};


export const Ans2 = (img: string, result: string, ans: string) => {
  const newQuestion = {
    img: img,
    asn: ans,
    result: result,
    score: 1
  };
  return {
    type: type.QUESTION_2,
    questionData: newQuestion
  };
};

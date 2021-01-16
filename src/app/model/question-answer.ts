import {Question} from './question';

export class QuestionAnswer {
  question: Question;
  answer: string;


  constructor(question: Question, answer: string) {
    this.question = question;
    this.answer = answer;
  }



}

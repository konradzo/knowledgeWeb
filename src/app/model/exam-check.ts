import {QuestionAnswer} from './question-answer';

export class ExamCheck {
  questionAnswers: QuestionAnswer[];
  userId: number;


  constructor(questionAnswers: QuestionAnswer[], userId: number) {
    this.questionAnswers = questionAnswers;
    this.userId = userId;
  }
}

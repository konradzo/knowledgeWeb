import {Question} from './question';

export class Exam {
  id: number;
  header: string;
  description: string;
  questionList: Question[];
}

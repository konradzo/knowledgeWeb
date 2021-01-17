import {Question} from './question';

export class Exam {
  id: number;
  header: string;
  description: string;
  questionList: Question[] = [];


  constructor(header: string, description: string) {
    this.header = header;
    this.description = description;
  }
}

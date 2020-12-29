import {Exam} from './exam';

export class Category {
  id: number;
  name: string;
  description: string;
  examList: Exam[];


  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

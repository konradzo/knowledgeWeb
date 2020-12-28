import {Exam} from './exam';

export class Category {
  id: number;
  name: string;
  description: string;
  examList: Exam[];
}

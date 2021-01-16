import {Component, OnInit} from '@angular/core';
import {Exam} from '../../model/exam';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../model/question';
import {QuestionAnswer} from '../../model/question-answer';
import {ResultService} from '../../services/result.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam: Exam = new Exam();
  currentExamId: number;
  currentCategoryId: number;
  //todo
  userId = 3;

  givenAnswers: QuestionAnswer[] = [];

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.showExam();
    });
  }

  showExam() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      console.log('Category id for exam :' + this.currentCategoryId);
    } else {
      this.currentCategoryId = 1;
    }


    const hasExamId: boolean = this.route.snapshot.paramMap.has('examId');


    if (hasExamId) {
      this.currentExamId = +this.route.snapshot.paramMap.get('examId');
      console.log('Exam id:' + this.currentExamId);
    } else {
      this.currentExamId = 1;
    }

    this.categoryService.getExam(this.currentCategoryId, this.currentExamId).subscribe(
      result => {
        this.exam = result;
      }
    );

  }


  fillQuestionAnswer(question: Question, answer: string, i: number) {
    console.log(`index value ${i}`);
    this.givenAnswers[i - 1] = new QuestionAnswer(question, answer);
    console.log(`Filled answer ${answer}`);
    // console.log(`Question id ${question.id}`);
    console.log(`Filled answers size ${this.givenAnswers.length}`);

    // for (let a of this.givenAnswers) {
    //   console.log(`${a.question.id}. ${a.question.question}, answer ${a.answer}`);
    // }

  }

  onSubmit() {
    //this.categoryService.checkExam(this.currentCategoryId, this.exam.id, this.userId, this.givenAnswers);
  }

  notAllQuestionAnswered() {
    let check: boolean = this.givenAnswers.length != this.exam.questionList.length;
    if (!check){
      this.resultService.sendData(this.userId, this.currentCategoryId, this.exam.id, this.givenAnswers);
    }

    return check;
  }
}

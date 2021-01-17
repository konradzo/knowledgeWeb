import {Component, OnInit} from '@angular/core';
import {Exam} from '../../model/exam';
import {ActivatedRoute} from '@angular/router';
import {ExamService} from '../../services/exam.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../model/question';

@Component({
  selector: 'app-exam-update',
  templateUrl: './exam-update.component.html',
  styleUrls: ['./exam-update.component.css']
})
export class ExamUpdateComponent implements OnInit {
  exam: Exam;
  currentExamId: number;
  currentCategoryId: number;

  showNewQuestionCreator = false;
  createQuestionFormGroup: FormGroup;


  constructor(private route: ActivatedRoute, private examService: ExamService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.showExamToUpdate();
    });

  }

  showExamToUpdate() {
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

    this.examService.getExam(this.currentCategoryId, this.currentExamId).subscribe(
      result => {
        this.exam = result;
      }
    );

  }

  showQuestionCreator() {
    this.showNewQuestionCreator = !this.showNewQuestionCreator;
    if (this.showNewQuestionCreator) {
      console.log('Creating question form group');
      this.createQuestionFormGroup = this.formBuilder.group({
          newQuestion: this.formBuilder.group({
            questionContent: new FormControl('', [Validators.required]),
            firstPossibleAnswer: new FormControl('', [Validators.required]),
            secondPossibleAnswer: new FormControl('', [Validators.required]),
            thirdPossibleAnswer: new FormControl('', [Validators.required]),
            fourthPossibleAnswer: new FormControl('', [Validators.required]),
            correctAnswer: new FormControl('', [Validators.required])
          })
        }
      );
    }

  }

  addNewQuestion() {
    let questionContent = this.createQuestionFormGroup.get('newQuestion.questionContent').value;
    let firstPossibleAnswer = this.createQuestionFormGroup.get('newQuestion.firstPossibleAnswer').value;
    let secondPossibleAnswer = this.createQuestionFormGroup.get('newQuestion.secondPossibleAnswer').value;
    let thirdPossibleAnswer = this.createQuestionFormGroup.get('newQuestion.thirdPossibleAnswer').value;
    let fourthPossibleAnswer = this.createQuestionFormGroup.get('newQuestion.fourthPossibleAnswer').value;
    let correctAnswer = this.createQuestionFormGroup.get('newQuestion.correctAnswer').value;

    let answers: string[] = [];
    answers.push(firstPossibleAnswer);
    answers.push(secondPossibleAnswer);
    answers.push(thirdPossibleAnswer);
    answers.push(fourthPossibleAnswer);

    let newQuestion = new Question(questionContent, answers, correctAnswer);
    this.examService.addQuestion(this.currentCategoryId, this.currentExamId, newQuestion).subscribe();
    this.ngOnInit();
  }
}

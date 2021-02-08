import {Component, OnInit} from '@angular/core';
import {ResultService} from '../../services/result.service';
import {QuestionAnswer} from '../../model/question-answer';
import {User} from '../../model/user';
import {ExamResult} from '../../model/exam-result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  givenAnswers: QuestionAnswer[] = [];
  userId: number;
  categoryId: number;
  examId: number;

  user: User;
  possiblePoints: number;
  points: number;
  examResult: ExamResult = new ExamResult();

  constructor(private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.givenAnswers = this.resultService.givenAnswers;
    this.userId = this.resultService.userId;
    this.categoryId = this.resultService.categoryId;
    this.examId = this.resultService.examId;
    this.showUserResults();
  }

  showUserResults() {
    this.resultService.checkAnswers(this.userId, this.categoryId, this.examId, this.givenAnswers).subscribe(
      result => {
        // this.user = result.user;
        this.examResult = result;
      }
    );
  }

}

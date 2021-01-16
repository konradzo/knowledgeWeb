import {Injectable} from '@angular/core';
import {QuestionAnswer} from '../model/question-answer';
import {ExamCheck} from '../model/exam-check';
import {HttpClient} from '@angular/common/http';
import {ExamResult} from '../model/exam-result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  givenAnswers: QuestionAnswer[] = [];
  userId: number;
  categoryId: number;
  examId: number;

  private baseCheckUrl = 'http://localhost:8080/api/categories';

  constructor(private  httpClient: HttpClient) {
  }

  sendData(userId: number, currentCategoryId: number, id: number, sentAnswers: QuestionAnswer[]) {
    this.userId = userId;
    this.categoryId = currentCategoryId;
    this.examId = id;
    this.givenAnswers = sentAnswers;
  }

  checkAnswers(userId: number, currentCategoryId: number, id: number, sentAnswers: QuestionAnswer[]) {
    const searchUrl = this.baseCheckUrl + '/' + currentCategoryId + '/exams/' + id + '/check';
    let examCheck: ExamCheck = new ExamCheck(sentAnswers, userId);
    return this.httpClient.post<ExamResult>(searchUrl, examCheck);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Exam} from '../model/exam';
import {HttpClient} from '@angular/common/http';
import {Question} from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl = 'http://localhost:8080/api/categories';

  constructor(private httpClient: HttpClient) {
  }

  getExam(currentCategoryId: number, currentExamId: number): Observable<Exam> {
    const searchUrl = this.baseUrl + '/' + currentCategoryId + '/exams/' + currentExamId;
    return this.httpClient.get<Exam>(searchUrl);
  }

  createExam(categoryId: number, exam: Exam): Observable<Exam> {
    const createUrl = this.baseUrl + '/' + categoryId + '/exams';
    return this.httpClient.post<Exam>(createUrl, exam);
  }

  addQuestion(categoryId: number, examId: number, question: Question){
    const createUrl = this.baseUrl + '/' + categoryId + '/exams/'+examId;
    return this.httpClient.put<Exam>(createUrl, question);
  }

}

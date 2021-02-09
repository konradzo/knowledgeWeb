import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Exam} from '../model/exam';
import {HttpClient} from '@angular/common/http';
import {Question} from '../model/question';
import {map} from 'rxjs/operators';
import {ExamApproach} from '../model/exam-approach';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl = 'http://localhost:8080/api/categories';
  private examApproachesBaseUrl = 'http://localhost:8080/api/rankings/exams';

  constructor(private httpClient: HttpClient) {
  }

  getExam(currentCategoryId: number, currentExamId: number): Observable<Exam> {
    const searchUrl = this.baseUrl + '/' + currentCategoryId + '/exams/' + currentExamId;
    return this.httpClient.get<Exam>(searchUrl);
  }

  getExamList(currentCategoryId: number): Observable<Exam[]> {
    const fetchUrl = this.baseUrl + '/' + currentCategoryId + '/exams';
    return this.httpClient.get<GetResponse>(fetchUrl).pipe(
      map(response => response.exams)
    );
  }

  createExam(categoryId: number, exam: Exam): Observable<Exam> {
    const createUrl = this.baseUrl + '/' + categoryId + '/exams';
    return this.httpClient.post<Exam>(createUrl, exam);
  }

  addQuestion(categoryId: number, examId: number, question: Question) {
    const createUrl = this.baseUrl + '/' + categoryId + '/exams/' + examId;
    return this.httpClient.put<Exam>(createUrl, question);
  }

  removeQuestion(currentCategoryId: number, currentExamId: number, questionId: number) {
    const removeUrl = this.baseUrl + '/' + currentCategoryId + '/exams/' + currentExamId + '/' + questionId;
    return this.httpClient.delete<Exam>(removeUrl);
  }

  fetchExamApproaches(examId: number) {
    const examApproachesUrl = this.examApproachesBaseUrl + '/' + examId;
    return this.httpClient.get<GetExamApproachListResponse>(examApproachesUrl);
  }
}

interface GetResponse {
  exams: Exam[];
  size: number;
}

interface GetExamApproachListResponse {
  size: number;
  examApproaches: ExamApproach[];
}

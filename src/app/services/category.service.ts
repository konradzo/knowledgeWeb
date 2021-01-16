import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';
import {Exam} from '../model/exam';
import {QuestionAnswer} from '../model/question-answer';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/categories';

  constructor(private httpClient: HttpClient) {
  }

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.categories)
    );
  }

  getCategory(currentCategoryId: number): Observable<Category> {
    const searchUrl = this.baseUrl + '/' + currentCategoryId;
    return this.httpClient.get<Category>(searchUrl);
  }

  createCategory(category: Category): Observable<Category> {
    console.log('Category json = ' + JSON.stringify(category));
    return this.httpClient.post<Category>(this.baseUrl, category);
  }

  getExam(currentCategoryId: number, currentExamId: number): Observable<Exam> {
    const searchUrl = this.baseUrl + '/' + currentCategoryId + '/exams/' + currentExamId;
    return this.httpClient.get<Exam>(searchUrl);
  }

}

interface GetResponse {
  categories: Category[];
  size: number;
}




import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ExamApproach} from '../model/exam-approach';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) {
  }

  listAllusers(): Observable<User[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.users)
    );
  }

  createUser(newUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log('Sending to backend');
    return this.httpClient.post<User>(this.baseUrl, newUser);
  }

  public save(user: User) {
    console.log('User json = ' + JSON.stringify(user));
    return this.httpClient.post<User>(this.baseUrl, user);
  }

  fetchUserExamApproaches(userId: number) {
    const examApproachesUrl = this.baseUrl + '/' + userId + '/approaches';
    return this.httpClient.get<GetExamApproachListResponse>(examApproachesUrl);
  }

}

interface GetResponse {
  size: number;
  users: User[];
}

interface GetExamApproachListResponse {
  size: number;
  examApproaches: ExamApproach[];
}

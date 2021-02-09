import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService} from './services/category.service';
import {CategoryComponent} from './components/category/category.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {ExamComponent} from './components/exam/exam.component';
import {ResultComponent} from './components/result/result.component';
import {ResultService} from './services/result.service';
import {ExamUpdateComponent} from './components/exam-update/exam-update.component';
import {UserListComponent} from './components/user-list/user-list.component';
import { UserExamApproachesComponent } from './components/user-exam-approaches/user-exam-approaches.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingsCategoryComponent } from './components/rankings-category/rankings-category.component';
import { RankingsExamComponent } from './components/rankings-exam/rankings-exam.component';

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'categories/:id/exams/:examId/check', component: ResultComponent},
  {path: 'categories/:id/exams/:examId/update', component: ExamUpdateComponent},
  {path: 'categories/:id/exams/:examId', component: ExamComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'users/:id/exam-approaches', component: UserExamApproachesComponent},
  {path: 'users', component: UserListComponent},
  {path: 'rankings/categories/:id', component: RankingsCategoryComponent},
  {path: 'rankings/categories/:id/exams/:id', component: RankingsExamComponent},
  {path: 'rankings', component: RankingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent,
    SignUpComponent,
    ExamComponent,
    ResultComponent,
    ExamUpdateComponent,
    UserListComponent,
    UserExamApproachesComponent,
    RankingsComponent,
    RankingsCategoryComponent,
    RankingsExamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CategoryService, UserService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

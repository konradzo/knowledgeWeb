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
import { ExamComponent } from './components/exam/exam.component';

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'categories/:id/exams/:examId', component: ExamComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories', component: CategoryListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent,
    SignUpComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CategoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

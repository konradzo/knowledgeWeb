import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService} from './services/category.service';
import {CategoryComponent} from './components/category/category.component';

const routes: Routes = [
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories', component: CategoryListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

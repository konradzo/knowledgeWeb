import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.listCategories();
  }

  // tslint:disable-next-line:typedef
  listCategories() {
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data;
      }
    );
  }
}

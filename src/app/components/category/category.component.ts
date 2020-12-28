import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  currentCategoryId: number;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.showCategory();
    });
  }

  showCategory() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    this.categoryService.getCategory(this.currentCategoryId).subscribe(
      result => {
        this.category = result;
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../services/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  showCategoryCreator = false;
  categories: Category[];
  createCategoryFormGroup: FormGroup;

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) {
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

  showNewCategoryCreator() {
    this.showCategoryCreator = !this.showCategoryCreator;
    if (this.showCategoryCreator) {
      console.log('Creating category form group');
      this.createCategoryFormGroup = this.formBuilder.group({
          newCategory: this.formBuilder.group({
            categoryName: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required])
          })
        }
      );
    }
  }

  createNewCategory() {
    console.log('Before before');
    const categoryName = this.createCategoryFormGroup.get('newCategory.categoryName').value;
    const description = this.createCategoryFormGroup.get('newCategory.description').value;
    console.log('Before');
    const newCategory = new Category(categoryName, description);
    // @ts-ignore
    this.categoryService.createCategory(newCategory).subscribe(this.listCategories());
    console.log('Created category: ' + categoryName);

  }
}

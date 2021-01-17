import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Exam} from '../../model/exam';
import {ExamService} from '../../services/exam.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  currentCategoryId: number;

  showExamCreator: boolean;
  createExamFormGroup: FormGroup;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute,
              private formBuilder: FormBuilder, private examService: ExamService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.showCategory();
      this.showExamCreator = false;
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
    );
  }

  showNewExamCreator() {
    this.showExamCreator = !this.showExamCreator;
    if (this.showExamCreator) {
      console.log('Creating exam form group');
      this.createExamFormGroup = this.formBuilder.group({
        newExam: this.formBuilder.group({
          examHeader: new FormControl('', [Validators.required]),
          examDescription: new FormControl('', [Validators.required])
        })
      });
    }

  }

  createNewExam() {
    const examHeader = this.createExamFormGroup.get('newExam.examHeader').value;
    const examDescription = this.createExamFormGroup.get('newExam.examDescription').value;

    const newExam = new Exam(examHeader, examDescription);
    // @ts-ignore
    this.examService.createExam(this.currentCategoryId, newExam).subscribe();
    this.ngOnInit();

  }
}

import {Component, OnInit} from '@angular/core';
import {Exam} from '../../model/exam';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam: Exam;
  currentExamId: number;
  currentCategoryId: number;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.showExam();
    });
  }

  showExam() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      console.log('Category id for exam :' + this.currentCategoryId);
    } else {
      this.currentCategoryId = 1;
    }


    const hasExamId: boolean = this.route.snapshot.paramMap.has('examId');


    if (hasExamId) {
      this.currentExamId = +this.route.snapshot.paramMap.get('examId');
      console.log('Exam id:' + this.currentExamId);
    } else {
      this.currentExamId = 1;
    }

    this.categoryService.getExam(this.currentCategoryId, this.currentExamId).subscribe(
      result => {
        this.exam = result;
      }
    );

  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {Exam} from '../../model/exam';
import {ExamService} from '../../services/exam.service';

@Component({
  selector: 'app-rankings-category',
  templateUrl: './rankings-category.component.html',
  styleUrls: ['./rankings-category.component.css']
})
export class RankingsCategoryComponent implements OnInit {

  currentCategoryId: number;
  examList: Exam[];

  constructor(private activatedRoute: ActivatedRoute, private examService: ExamService) {
  }

  ngOnInit(): void {
    this.fetchSuitableExam();
  }

  fetchSuitableExam() {
    const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id');
    } else {
      throw new Error('No category id!');
    }

    this.examService.getExamList(this.currentCategoryId).subscribe(data => {
      this.examList = data;
    });
  }

}

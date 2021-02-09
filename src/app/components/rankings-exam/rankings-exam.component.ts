import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExamApproach} from '../../model/exam-approach';
import {ExamService} from '../../services/exam.service';

@Component({
  selector: 'app-rankings-exam',
  templateUrl: './rankings-exam.component.html',
  styleUrls: ['./rankings-exam.component.css']
})
export class RankingsExamComponent implements OnInit {

  currentExamId: number;
  examApproaches: ExamApproach[];

  constructor(private activatedRoute: ActivatedRoute, private examService: ExamService) {
  }

  ngOnInit(): void {
    this.fetchExamApproachRankingList();
  }

  fetchExamApproachRankingList() {
    const hasExamId: boolean = this.activatedRoute.snapshot.paramMap.has('id');
    if (hasExamId) {
      this.currentExamId = +this.activatedRoute.snapshot.paramMap.get('id');
    } else {
      throw new Error('No exam id');
    }

    this.examService.fetchExamApproaches(this.currentExamId).subscribe(data => {
      this.examApproaches = data.examApproaches;
    });
  }

}

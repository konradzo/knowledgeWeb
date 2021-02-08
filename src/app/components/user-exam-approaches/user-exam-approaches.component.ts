import {Component, OnInit} from '@angular/core';
import {ExamApproach} from '../../model/exam-approach';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-exam-approaches',
  templateUrl: './user-exam-approaches.component.html',
  styleUrls: ['./user-exam-approaches.component.css']
})
export class UserExamApproachesComponent implements OnInit {

  currentUserId: number;
  size: number;
  examApproaches: ExamApproach[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.showUserExamApproaches();
    });
  }

  showUserExamApproaches() {
    const hasUserId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasUserId) {
      this.currentUserId = +this.route.snapshot.paramMap.get('id');
    } else {
      // todo
      throw new Error('No userId');
    }

    this.userService.fetchUserExamApproaches(this.currentUserId).subscribe(response => {
        this.size = response.size;
        this.examApproaches = response.examApproaches;
      }
    );
  }

}

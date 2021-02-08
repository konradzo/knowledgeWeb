import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExamApproachesComponent } from './user-exam-approaches.component';

describe('UserExamApproachesComponent', () => {
  let component: UserExamApproachesComponent;
  let fixture: ComponentFixture<UserExamApproachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExamApproachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExamApproachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

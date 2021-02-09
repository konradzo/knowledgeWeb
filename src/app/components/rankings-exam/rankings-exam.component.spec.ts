import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsExamComponent } from './rankings-exam.component';

describe('RankingsExamComponent', () => {
  let component: RankingsExamComponent;
  let fixture: ComponentFixture<RankingsExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

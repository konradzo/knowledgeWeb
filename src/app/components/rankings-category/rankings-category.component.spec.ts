import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsCategoryComponent } from './rankings-category.component';

describe('RankingsCategoryComponent', () => {
  let component: RankingsCategoryComponent;
  let fixture: ComponentFixture<RankingsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

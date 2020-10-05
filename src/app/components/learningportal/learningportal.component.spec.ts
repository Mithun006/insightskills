import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningportalComponent } from './learningportal.component';

describe('LearningportalComponent', () => {
  let component: LearningportalComponent;
  let fixture: ComponentFixture<LearningportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

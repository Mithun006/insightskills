import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticetestComponent } from './practicetest.component';

describe('PracticetestComponent', () => {
  let component: PracticetestComponent;
  let fixture: ComponentFixture<PracticetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

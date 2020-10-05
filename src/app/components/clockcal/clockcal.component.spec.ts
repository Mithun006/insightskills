import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockcalComponent } from './clockcal.component';

describe('ClockcalComponent', () => {
  let component: ClockcalComponent;
  let fixture: ComponentFixture<ClockcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

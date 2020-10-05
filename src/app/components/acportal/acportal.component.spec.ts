import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcportalComponent } from './acportal.component';

describe('AcportalComponent', () => {
  let component: AcportalComponent;
  let fixture: ComponentFixture<AcportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

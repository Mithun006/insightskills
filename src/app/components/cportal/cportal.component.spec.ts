import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CportalComponent } from './cportal.component';

describe('CportalComponent', () => {
  let component: CportalComponent;
  let fixture: ComponentFixture<CportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

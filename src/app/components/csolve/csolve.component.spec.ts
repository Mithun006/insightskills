import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsolveComponent } from './csolve.component';

describe('CsolveComponent', () => {
  let component: CsolveComponent;
  let fixture: ComponentFixture<CsolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

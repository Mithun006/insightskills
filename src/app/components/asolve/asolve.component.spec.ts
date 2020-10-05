import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsolveComponent } from './asolve.component';

describe('AsolveComponent', () => {
  let component: AsolveComponent;
  let fixture: ComponentFixture<AsolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

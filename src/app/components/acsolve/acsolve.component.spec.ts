import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsolveComponent } from './acsolve.component';

describe('AcsolveComponent', () => {
  let component: AcsolveComponent;
  let fixture: ComponentFixture<AcsolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcsolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AportalComponent } from './aportal.component';

describe('AportalComponent', () => {
  let component: AportalComponent;
  let fixture: ComponentFixture<AportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

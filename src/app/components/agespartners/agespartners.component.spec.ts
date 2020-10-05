import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgespartnersComponent } from './agespartners.component';

describe('AgespartnersComponent', () => {
  let component: AgespartnersComponent;
  let fixture: ComponentFixture<AgespartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgespartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgespartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

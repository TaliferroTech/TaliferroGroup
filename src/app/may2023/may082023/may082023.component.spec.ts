import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May082023Component } from './may082023.component';

describe('May082023Component', () => {
  let component: May082023Component;
  let fixture: ComponentFixture<May082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

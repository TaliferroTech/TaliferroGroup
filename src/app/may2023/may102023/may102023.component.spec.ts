import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May102023Component } from './may102023.component';

describe('May102023Component', () => {
  let component: May102023Component;
  let fixture: ComponentFixture<May102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

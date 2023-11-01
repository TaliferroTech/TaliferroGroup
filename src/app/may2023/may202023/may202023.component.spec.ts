import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May202023Component } from './may202023.component';

describe('May202023Component', () => {
  let component: May202023Component;
  let fixture: ComponentFixture<May202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

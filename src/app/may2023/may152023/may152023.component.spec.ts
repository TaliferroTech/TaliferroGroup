import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May152023Component } from './may152023.component';

describe('May152023Component', () => {
  let component: May152023Component;
  let fixture: ComponentFixture<May152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

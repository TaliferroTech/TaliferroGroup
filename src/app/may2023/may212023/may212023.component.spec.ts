import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May212023Component } from './may212023.component';

describe('May212023Component', () => {
  let component: May212023Component;
  let fixture: ComponentFixture<May212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

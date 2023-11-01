import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May182023Component } from './may182023.component';

describe('May182023Component', () => {
  let component: May182023Component;
  let fixture: ComponentFixture<May182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

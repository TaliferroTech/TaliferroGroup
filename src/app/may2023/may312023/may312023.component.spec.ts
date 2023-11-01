import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May312023Component } from './may312023.component';

describe('May312023Component', () => {
  let component: May312023Component;
  let fixture: ComponentFixture<May312023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May312023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May312023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

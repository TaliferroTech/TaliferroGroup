import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May012023Component } from './may012023.component';

describe('May012023Component', () => {
  let component: May012023Component;
  let fixture: ComponentFixture<May012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

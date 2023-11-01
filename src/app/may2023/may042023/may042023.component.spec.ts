import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May042023Component } from './may042023.component';

describe('May042023Component', () => {
  let component: May042023Component;
  let fixture: ComponentFixture<May042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

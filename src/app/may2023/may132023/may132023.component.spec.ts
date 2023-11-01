import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May132023Component } from './may132023.component';

describe('May132023Component', () => {
  let component: May132023Component;
  let fixture: ComponentFixture<May132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

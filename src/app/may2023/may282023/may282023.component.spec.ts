import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May282023Component } from './may282023.component';

describe('May282023Component', () => {
  let component: May282023Component;
  let fixture: ComponentFixture<May282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

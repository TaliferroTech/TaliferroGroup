import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct062023Component } from './oct062023.component';

describe('Oct062023Component', () => {
  let component: Oct062023Component;
  let fixture: ComponentFixture<Oct062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

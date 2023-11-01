import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar312023Component } from './mar312023.component';

describe('Mar312023Component', () => {
  let component: Mar312023Component;
  let fixture: ComponentFixture<Mar312023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar312023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar312023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar102023Component } from './mar102023.component';

describe('Mar102023Component', () => {
  let component: Mar102023Component;
  let fixture: ComponentFixture<Mar102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

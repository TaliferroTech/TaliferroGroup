import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec282022Component } from './dec282022.component';

describe('Dec282022Component', () => {
  let component: Dec282022Component;
  let fixture: ComponentFixture<Dec282022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec282022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec282022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

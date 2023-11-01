import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec302022Component } from './dec302022.component';

describe('Dec302022Component', () => {
  let component: Dec302022Component;
  let fixture: ComponentFixture<Dec302022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec302022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec302022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

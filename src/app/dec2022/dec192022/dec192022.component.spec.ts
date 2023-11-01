import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec192022Component } from './dec192022.component';

describe('Dec192022Component', () => {
  let component: Dec192022Component;
  let fixture: ComponentFixture<Dec192022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec192022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec192022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

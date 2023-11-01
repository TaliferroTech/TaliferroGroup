import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May262023Component } from './may262023.component';

describe('May262023Component', () => {
  let component: May262023Component;
  let fixture: ComponentFixture<May262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

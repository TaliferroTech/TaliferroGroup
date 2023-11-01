import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May302023Component } from './may302023.component';

describe('May302023Component', () => {
  let component: May302023Component;
  let fixture: ComponentFixture<May302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

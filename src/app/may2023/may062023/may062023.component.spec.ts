import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May062023Component } from './may062023.component';

describe('May062023Component', () => {
  let component: May062023Component;
  let fixture: ComponentFixture<May062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

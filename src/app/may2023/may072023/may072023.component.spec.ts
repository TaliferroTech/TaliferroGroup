import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May072023Component } from './may072023.component';

describe('May072023Component', () => {
  let component: May072023Component;
  let fixture: ComponentFixture<May072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

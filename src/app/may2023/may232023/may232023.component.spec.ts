import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May232023Component } from './may232023.component';

describe('May232023Component', () => {
  let component: May232023Component;
  let fixture: ComponentFixture<May232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

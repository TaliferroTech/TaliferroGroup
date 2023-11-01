import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May242023Component } from './may242023.component';

describe('May242023Component', () => {
  let component: May242023Component;
  let fixture: ComponentFixture<May242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

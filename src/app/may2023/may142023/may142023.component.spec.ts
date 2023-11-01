import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May142023Component } from './may142023.component';

describe('May142023Component', () => {
  let component: May142023Component;
  let fixture: ComponentFixture<May142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

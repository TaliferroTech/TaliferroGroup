import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May022023Component } from './may022023.component';

describe('May022023Component', () => {
  let component: May022023Component;
  let fixture: ComponentFixture<May022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

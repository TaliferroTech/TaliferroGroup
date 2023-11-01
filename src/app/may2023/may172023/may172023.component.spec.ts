import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May172023Component } from './may172023.component';

describe('May172023Component', () => {
  let component: May172023Component;
  let fixture: ComponentFixture<May172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May162023Component } from './may162023.component';

describe('May162023Component', () => {
  let component: May162023Component;
  let fixture: ComponentFixture<May162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

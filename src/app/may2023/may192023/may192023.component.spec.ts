import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May192023Component } from './may192023.component';

describe('May192023Component', () => {
  let component: May192023Component;
  let fixture: ComponentFixture<May192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

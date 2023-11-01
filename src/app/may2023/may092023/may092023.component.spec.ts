import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May092023Component } from './may092023.component';

describe('May092023Component', () => {
  let component: May092023Component;
  let fixture: ComponentFixture<May092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

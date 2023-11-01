import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May052023Component } from './may052023.component';

describe('May052023Component', () => {
  let component: May052023Component;
  let fixture: ComponentFixture<May052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

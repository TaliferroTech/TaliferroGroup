import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May222023Component } from './may222023.component';

describe('May222023Component', () => {
  let component: May222023Component;
  let fixture: ComponentFixture<May222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

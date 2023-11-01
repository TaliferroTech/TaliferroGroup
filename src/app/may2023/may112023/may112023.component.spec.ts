import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May112023Component } from './may112023.component';

describe('May112023Component', () => {
  let component: May112023Component;
  let fixture: ComponentFixture<May112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

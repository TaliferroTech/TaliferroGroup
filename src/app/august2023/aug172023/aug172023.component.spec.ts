import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug172023Component } from './aug172023.component';

describe('Aug172023Component', () => {
  let component: Aug172023Component;
  let fixture: ComponentFixture<Aug172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

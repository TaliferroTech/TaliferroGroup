import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug102023Component } from './aug102023.component';

describe('Aug102023Component', () => {
  let component: Aug102023Component;
  let fixture: ComponentFixture<Aug102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

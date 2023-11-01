import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug202023Component } from './aug202023.component';

describe('Aug202023Component', () => {
  let component: Aug202023Component;
  let fixture: ComponentFixture<Aug202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

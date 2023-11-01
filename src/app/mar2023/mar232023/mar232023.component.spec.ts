import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar232023Component } from './mar232023.component';

describe('Mar232023Component', () => {
  let component: Mar232023Component;
  let fixture: ComponentFixture<Mar232023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar232023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar232023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar182023Component } from './mar182023.component';

describe('Mar182023Component', () => {
  let component: Mar182023Component;
  let fixture: ComponentFixture<Mar182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

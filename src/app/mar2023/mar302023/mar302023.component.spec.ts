import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar302023Component } from './mar302023.component';

describe('Mar302023Component', () => {
  let component: Mar302023Component;
  let fixture: ComponentFixture<Mar302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar282023Component } from './mar282023.component';

describe('Mar282023Component', () => {
  let component: Mar282023Component;
  let fixture: ComponentFixture<Mar282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

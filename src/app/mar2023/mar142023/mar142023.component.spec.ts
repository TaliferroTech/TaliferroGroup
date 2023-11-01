import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar142023Component } from './mar142023.component';

describe('Mar142023Component', () => {
  let component: Mar142023Component;
  let fixture: ComponentFixture<Mar142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

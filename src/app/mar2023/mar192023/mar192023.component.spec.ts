import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar192023Component } from './mar192023.component';

describe('Mar192023Component', () => {
  let component: Mar192023Component;
  let fixture: ComponentFixture<Mar192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

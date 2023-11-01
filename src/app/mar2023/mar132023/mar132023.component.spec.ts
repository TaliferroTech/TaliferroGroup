import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar132023Component } from './mar132023.component';

describe('Mar132023Component', () => {
  let component: Mar132023Component;
  let fixture: ComponentFixture<Mar132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

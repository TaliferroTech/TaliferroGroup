import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar152023Component } from './mar152023.component';

describe('Mar152023Component', () => {
  let component: Mar152023Component;
  let fixture: ComponentFixture<Mar152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

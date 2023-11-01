import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar032023Component } from './mar032023.component';

describe('Mar032023Component', () => {
  let component: Mar032023Component;
  let fixture: ComponentFixture<Mar032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

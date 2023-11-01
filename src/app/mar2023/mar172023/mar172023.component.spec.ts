import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar172023Component } from './mar172023.component';

describe('Mar172023Component', () => {
  let component: Mar172023Component;
  let fixture: ComponentFixture<Mar172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

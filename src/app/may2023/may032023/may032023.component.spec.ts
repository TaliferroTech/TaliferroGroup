import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May032023Component } from './may032023.component';

describe('May032023Component', () => {
  let component: May032023Component;
  let fixture: ComponentFixture<May032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

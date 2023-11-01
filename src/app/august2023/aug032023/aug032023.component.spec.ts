import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug032023Component } from './aug032023.component';

describe('Aug032023Component', () => {
  let component: Aug032023Component;
  let fixture: ComponentFixture<Aug032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

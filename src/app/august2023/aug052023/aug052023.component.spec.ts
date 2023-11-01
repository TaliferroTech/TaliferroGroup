import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug052023Component } from './aug052023.component';

describe('Aug052023Component', () => {
  let component: Aug052023Component;
  let fixture: ComponentFixture<Aug052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

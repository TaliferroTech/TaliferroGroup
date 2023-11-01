import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug302023Component } from './aug302023.component';

describe('Aug302023Component', () => {
  let component: Aug302023Component;
  let fixture: ComponentFixture<Aug302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug312023Component } from './aug312023.component';

describe('Aug312023Component', () => {
  let component: Aug312023Component;
  let fixture: ComponentFixture<Aug312023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug312023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug312023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

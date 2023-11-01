import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug022023Component } from './aug022023.component';

describe('Aug022023Component', () => {
  let component: Aug022023Component;
  let fixture: ComponentFixture<Aug022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

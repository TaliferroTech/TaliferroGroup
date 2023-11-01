import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug082023Component } from './aug082023.component';

describe('Aug082023Component', () => {
  let component: Aug082023Component;
  let fixture: ComponentFixture<Aug082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug142023Component } from './aug142023.component';

describe('Aug142023Component', () => {
  let component: Aug142023Component;
  let fixture: ComponentFixture<Aug142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

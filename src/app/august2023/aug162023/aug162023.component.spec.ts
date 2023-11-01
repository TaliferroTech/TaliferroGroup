import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug162023Component } from './aug162023.component';

describe('Aug162023Component', () => {
  let component: Aug162023Component;
  let fixture: ComponentFixture<Aug162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

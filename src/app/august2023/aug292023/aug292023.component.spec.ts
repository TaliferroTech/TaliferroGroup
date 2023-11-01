import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug292023Component } from './aug292023.component';

describe('Aug292023Component', () => {
  let component: Aug292023Component;
  let fixture: ComponentFixture<Aug292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

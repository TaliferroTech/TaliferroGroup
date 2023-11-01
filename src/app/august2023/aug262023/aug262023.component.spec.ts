import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug262023Component } from './aug262023.component';

describe('Aug262023Component', () => {
  let component: Aug262023Component;
  let fixture: ComponentFixture<Aug262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

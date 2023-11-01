import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug152023Component } from './aug152023.component';

describe('Aug152023Component', () => {
  let component: Aug152023Component;
  let fixture: ComponentFixture<Aug152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

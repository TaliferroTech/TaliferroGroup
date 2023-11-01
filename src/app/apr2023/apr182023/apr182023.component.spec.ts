import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr182023Component } from './apr182023.component';

describe('Apr182023Component', () => {
  let component: Apr182023Component;
  let fixture: ComponentFixture<Apr182023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr182023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr182023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

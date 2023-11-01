import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr272023Component } from './apr272023.component';

describe('Apr272023Component', () => {
  let component: Apr272023Component;
  let fixture: ComponentFixture<Apr272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

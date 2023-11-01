import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep172023Component } from './sep172023.component';

describe('Sep172023Component', () => {
  let component: Sep172023Component;
  let fixture: ComponentFixture<Sep172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

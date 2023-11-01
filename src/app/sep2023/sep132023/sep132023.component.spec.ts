import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep132023Component } from './sep132023.component';

describe('Sep132023Component', () => {
  let component: Sep132023Component;
  let fixture: ComponentFixture<Sep132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

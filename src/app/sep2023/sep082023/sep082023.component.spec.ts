import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep082023Component } from './sep082023.component';

describe('Sep082023Component', () => {
  let component: Sep082023Component;
  let fixture: ComponentFixture<Sep082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

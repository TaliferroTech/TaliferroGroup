import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep062023Component } from './sep062023.component';

describe('Sep062023Component', () => {
  let component: Sep062023Component;
  let fixture: ComponentFixture<Sep062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep012023Component } from './sep012023.component';

describe('Sep012023Component', () => {
  let component: Sep012023Component;
  let fixture: ComponentFixture<Sep012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

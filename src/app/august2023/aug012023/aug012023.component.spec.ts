import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug012023Component } from './aug012023.component';

describe('Aug012023Component', () => {
  let component: Aug012023Component;
  let fixture: ComponentFixture<Aug012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

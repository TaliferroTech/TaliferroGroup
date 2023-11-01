import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug252023Component } from './aug252023.component';

describe('Aug252023Component', () => {
  let component: Aug252023Component;
  let fixture: ComponentFixture<Aug252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
